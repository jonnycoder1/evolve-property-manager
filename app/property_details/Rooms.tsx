'use client';
import React, { useState, useEffect } from "react";
import {nunito} from '../fonts'
import ButtonIcon from '@/app/property_details/ButtonIcon';
import { Database } from '../../database.types';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Room {
    type: string,
    label: string
}

export default function Rooms({ user }: { user: User | null }) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedRoomType, setSelectedRoomType] = useState<string>('Bedroom');

    const handleAddRoom = (event: React.SyntheticEvent, selectedRoomType: string) => {
        event.preventDefault();
        const filterRooms = rooms.filter(room => room.type === selectedRoomType);
        const nextIncrement = filterRooms.length + 1;
        const roomToAdd = { type: selectedRoomType, label: `${selectedRoomType} ${nextIncrement}` };
        const newRooms = [...rooms, roomToAdd];
        setRooms(newRooms);
    };

    const handleRemoveClick = (room: Room) => {
        const newRooms = rooms.filter(r => r.label !== room.label);
        setRooms(newRooms);
    };

    return (
        <section className="flex flex-wrap gap-2 mt-6">
            <div className="w-full">
                <h2 className={`${nunito.className} text-2xl text-success`}>Add Rooms</h2>
                <h3 className={`${nunito.className} font-semibold`}>Current Rooms:</h3>
                {rooms.map((room, index) => (
                    <ButtonIcon key={room.label}
                                name={room.label}
                                isSelected={true}
                                onClick={() => handleRemoveClick(room)}/>
                ))}
            </div>

            <div className="flex flex-col">
                <select id="room_type"
                        value={selectedRoomType}
                        onChange={(e) => setSelectedRoomType(e.target.value)}
                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                    <option defaultValue={"Bedroom"}>Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Dining Room">Dining Room</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Loft">Loft</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Studio">Studio</option>
                </select>
            </div>
            <div className="flex flex-col justify-end items-end">
                <button onClick={(e) => handleAddRoom(e, selectedRoomType)}
                        className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full">Add Room</button>
            </div>
        </section>
    );
}
