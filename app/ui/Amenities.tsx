'use client';

import AmtyButton from '@/app/ui/AmtyButton';
import {useState} from "react";
import { amenities as initialAmenities } from "@/app/data/amenities";

export default function Amenities() {
    const [allAmenities, setAllAmenities] = useState(initialAmenities);
    const [selectedAmenities, setSelectedAmenities] = useState<typeof initialAmenities[]>([]);

    const handleAddClick = (amenity: any, isSelected: boolean) => {
        const newAmenities = allAmenities.filter(a => a !== amenity);
        setAllAmenities(newAmenities);
        setSelectedAmenities([...selectedAmenities, {...amenity, isSelected: !amenity.isSelected}]);
    };
    const handleRemoveClick = (amenity: any, isSelected: boolean) => {
        const newSelectedAmenities = selectedAmenities.filter(a => a !== amenity);
        setSelectedAmenities(newSelectedAmenities);
        setAllAmenities([...allAmenities, {...amenity, isSelected: !amenity.isSelected}]);
    };
    return (
        <section className="flex gap-2">
            <div className="w-1/2">
                <h2 className="font-semibold">Selected: </h2>
                {selectedAmenities.map((amenity, index) => (
                    <AmtyButton key={index}
                                name={amenity.name}
                                isSelected={amenity.isSelected}
                                onClick={() => handleRemoveClick(amenity, amenity.isSelected)}/>
                ))}
            </div>
            <div className="w-1/2">
                <h2 className="font-semibold">All Amenities:</h2>
                {allAmenities.map((amenity, index) => (
                    <AmtyButton key={index}
                                name={amenity.name}
                                isSelected={amenity.isSelected}
                                onClick={() => handleAddClick(amenity, amenity.isSelected)}/>
                ))}
            </div>
        </section>
    );
}
