'use client';
import { Location } from "@/entities";
import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SelectLocation({ locations }: { locations: Location[] }) {
    const router = useRouter();
    return (
        <Select placeholder='Selecciona una tienda'
        label='Tienda'
        classNames={{
            mainWrapper: 'hover:ring-2 ring-blue-500 rounded-xl transition-all'
        }}
            onChange={((e) => {
                router.push(`/dashboard?store=${e.target.value}`);
            })}>
            {locations.map((location: Location) => {
                return (
                    <SelectItem key={location.locationId} value={location.locationId}>
                        {location.locationName}
                    </SelectItem>);
            })
            }
        </Select>)
}