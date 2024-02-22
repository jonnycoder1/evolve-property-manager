import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../database.types'
import Navbar from "@/app/Navbar";
import Amenities from "@/app/property_details/Amenities";
import Description from "@/app/property_details/Description";
import Rooms from "@/app/property_details/Rooms";

export default async function PropertyDetails(context: any) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user }, } = await supabase.auth.getUser();
    const propertyId = context.searchParams.id;
    console.log("propertyId = " + propertyId);

    return (
        <main className="flex flex-row min-h-screen py-8 px-4 sm:px-6">
            <div className="w-full">
                <Navbar/>
                <Description user={user}/>
                <Rooms user={user}/>
                <Amenities user={user}/>
            </div>
        </main>
    );
}
