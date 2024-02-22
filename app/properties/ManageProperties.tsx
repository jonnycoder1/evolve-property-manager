'use client';
import React, {useState, useEffect, useCallback} from "react";
import { nunito } from "@/app/layout";
import { Database } from '../../database.types';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from "next/link";

interface Property {
    id?: string,
    title: string,
    owner: string
}

export default function ManageProperties({ user }: { user: User | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [properties, setProperties] = useState<Property[]>([]);
    const [currentTitle, setCurrentTitle] = useState<string>('');

    const getProperties = useCallback(async () => {
        try {
            setLoading(true);
            const { data, error, status } = await supabase
                .from('properties')
                .select('id, title, owner')
                .eq('owner', user?.id)
            if (error && status !== 406) {
                console.log(error);
                throw error;
            }
            const typedData: Property[] | null = data;
            setProperties(typedData || []);
        }
        catch(error) {
            console.log(error);
            return;
        }
        finally {
            setLoading(false);
        }
    }, [user, supabase]);

    useEffect(() => {
        getProperties().then(r => {});
    }, [user, getProperties])

    const handleAddClick = useCallback(async (currentTitle: string) => {
        if (currentTitle.trim() === "") {
            return;
        }
        try {
            console.log(`inserting property`);
            const {data, error} = await supabase
                .from('properties')
                .insert([
                    {title: currentTitle, owner: user?.id}
                ]);
            if (error) {
                console.log(error);
                throw error;
            }
            setCurrentTitle('');
            await getProperties();
        }
        catch(error) {
            console.log(error);
            return;
        }
    },
    [user, supabase]);

    return (
        <section className="flex flex-wrap gap-2 mt-6">
            <h2 className={`${nunito.className} text-2xl text-success w-full`}>Manage Properties</h2>
            <div className="flex">

                {properties.map((property, index) => (

                    <section key={index} className="flex flex-wrap">
                        <div className="w-full px-2 mx-auto">
                            <div className="relative overflow-hidden bg-white shadow-md">
                                <div className="flex-row items-center justify-between p-4 space-y-3">
                                    <div>
                                        <h5 className="mr-3 font-semibold">{property.title}</h5>
                                    </div>
                                    <Link key={property.id}
                                          href={`/property_details?id=${property.id}`}>
                                        <p className="inline-flex bg-primary hover:bg-secondary text-white font-semibold mt-2 py-2 px-4 rounded-full">
                                            Edit Property
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                ))}
            </div>
            <h2 className={`${nunito.className} text-2xl text-success w-full mt-6`}>Add Property</h2>
            <div className="flex flex-col">
                <input type="text"
                       id="title"
                       value={currentTitle}
                       onChange={(e) => setCurrentTitle(e.target.value)}
                       className="w-[400px] bg-gray-50 border border-gray-300 text-neutral text-sm rounded-lg focus:ring-accent focus:border-accent focus:outline-accent block w-full p-2.5"
                       placeholder="Title or Address" required={true} />
            </div>
            <div className="flex flex-col justify-end items-end">
                <button onClick={() => handleAddClick(currentTitle)}
                    className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full">Add
                </button>
            </div>
        </section>
    );
}
