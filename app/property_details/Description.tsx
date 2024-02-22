'use client';
import { useState, useEffect } from "react";
import { nunito } from "@/app/layout";
import { Database } from '../../database.types';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Description({ user }: { user: User | null }) {

    return (
        <section className="flex flex-wrap gap-2 mt-6">
            <div className="w-full">
                <h2 className={`${nunito.className} text-2xl text-success`}>Describe Your Property</h2>
                <div className="flex-1 mt-1 mb-1 ">
                    Describe the property in some level detail. Choosing amenities below may help brainstorm
                    some highlights of your property and what makes it special.
                </div>
                <div className="flex-1">
                    <textarea id="property_description" rows={8}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
                                        focus:ring-accent focus:border-accent focus:outline-accent
                                        rounded-lg border border-gray-300"
                              placeholder="Write your thoughts here..."></textarea>

                </div>
            </div>
        </section>
    );
}
