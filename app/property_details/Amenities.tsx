'use client';
import ButtonIcon from '@/app/property_details/ButtonIcon';
import { useState, useEffect } from "react";
import { amenities as amenitiesData } from "@/app/data/amenities";
import {nunito} from '../fonts'
import { Database } from '../../database.types';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';


interface Amenity {
    name: string;
    category: string;
    other_category: string,
    isSelected: boolean;
}

export default function Amenities({ user }: { user: User | null }) {
    const [allAmenities, setAllAmenities] = useState<Record<string,Amenity[]>>({});
    const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);

    useEffect(() => {
        const uniqueCategories = new Set(amenitiesData.map((item) => item.category));
        console.log(uniqueCategories);
        const categories: Record<string, Amenity[]> = {};
        uniqueCategories.forEach((category) => categories[category] = []);
        amenitiesData.forEach((amenity) => {
            categories[amenity.category].push(amenity);
        });
        setAllAmenities(categories);
    }, []);

    const handleAddClick = (amenity: Amenity, isSelected: boolean) => {
        // Remove amenity from All
        const newAmenities = allAmenities[amenity.category].filter(a => a !== amenity);
        setAllAmenities({...allAmenities, [amenity.category]: newAmenities});
        // Add amenity to selected list
        setSelectedAmenities([...selectedAmenities, {...amenity, isSelected: !amenity.isSelected}]);
    };
    const handleRemoveClick = (amenity: Amenity, isSelected: boolean) => {
        // Remove amenity from selected list
        const newSelectedAmenities = selectedAmenities.filter(a => a !== amenity);
        setSelectedAmenities(newSelectedAmenities);
        // Add amenity back to All
        const updatedAllAmenities = {
            ...allAmenities,
            [amenity.category]: [...allAmenities[amenity.category],
                {...amenity, isSelected: !amenity.isSelected}]
        };
        setAllAmenities(updatedAllAmenities);
    };
    return (
        <section className="flex flex-wrap gap-2 mt-6">
            <div className="w-full">
                <h2 className={`${nunito.className} text-2xl text-success`}>Choose Your Property Amenities</h2>
            </div>
            <div className="flex-1 w-3/5">
                <>
                {Object.entries(allAmenities).map(([category, amenities]) => (
                    <section key={category} className="mb-3">
                        <h3 className={`${nunito.className} font-semibold`}>{category}:</h3>
                        {amenities.map((amenity) => (
                            <ButtonIcon key={amenity.name}
                                        name={amenity.name}
                                        isSelected={amenity.isSelected}
                                        onClick={() => handleAddClick(amenity, amenity.isSelected)}/>
                        ))}
                    </section>
                ))}
                </>
            </div>
            <div className="flex-1 w-2/5">
                <h3 className="font-semibold">Selected Amenities: </h3>
                {selectedAmenities.map((amenity, index) => (
                    <ButtonIcon key={index}
                                name={amenity.name}
                                isSelected={amenity.isSelected}
                                onClick={() => handleRemoveClick(amenity, amenity.isSelected)}/>
                ))}
            </div>
        </section>
    );
}
