import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../database.types'
import ManageProperties from "@/app/properties/ManageProperties";
import Navbar from "@/app/Navbar";

export default async function Properties() {
    const supabase = createServerComponentClient<Database>({cookies})
    console.log("properties page: getting user")
    const {data: {user},} = await supabase.auth.getUser();

    return (
        <main className="flex flex-row min-h-screen py-8 px-4 sm:px-6">
            <div className="w-full">
                <Navbar />
                <ManageProperties user={user}/>
            </div>
        </main>
    );
}
