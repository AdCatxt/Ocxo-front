import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if (store) return null;
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
    const dataLocations: Location[] = await responseLocations.json()
    return (
        <form action={createLocation} className='bg-red-600 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
            <h1 className='text-2xl text-white text-center'> Crear Tienda </h1>
            <Input label='Nombre de la Tienda' placeholder='OxxoName' name='locationName' />
            <Input label='Dirección' placeholder='AV. siempre viva NX' name='locationAddress' />
            <Input label='Latitud' placeholder='-120' name='locationLat' />
            <Input label='Longitud' placeholder='20' name='locationLng' />
            <SelectManager managers={dataManagers} locations={dataLocations} />
            <Button type='submit' color='primary'> Confirmar </Button>
        </form>
    )
}