import { Button, Input } from "@heroui/react";
import { updateLocation } from "@/actions/locations/uptate";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if (!store || store === undefined || typeof store === 'object') return null;
    const updateWithStoreId = updateLocation.bind(null, store);
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ['dashboard:managers']
        }
    })
    const dataManagers: Manager[] = await responseManagers.json()
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ['dashboard:locations', 'dahsboard:locations:managers']
        }
    })
    const dataLocations: Location[] = await responseLocations.json();
    
    let foundLocation = dataLocations.find((location) => location.locationId === +store);
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId);

    return (
        <form action={updateWithStoreId} className='bg-red-600 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
            <h1 className='text-2xl text-white text-center'> Crear Tienda </h1>
            <Input defaultValue={foundLocation?.locationName} label='Nombre' placeholder='OxxoName' name='locationName' />
            <Input defaultValue={foundLocation?.locationAddress} label='Dirección' placeholder='AV. siempre viva NX' name='locationAddress' />
            <Input defaultValue={foundLocation?.locationLatLng[0].toString()} label='Latitud' placeholder='-120' name='locationLat' />
            <Input defaultValue={foundLocation?.locationLatLng[1].toString()} label='Longitud' placeholder='20' name='locationLng' />
            <SelectManager defaultManager={foundManager?.managerId} managers={dataManagers} locations={dataLocations} />
            <Button type='submit' color='primary'> Confirmar </Button>
        </form>
    )
}