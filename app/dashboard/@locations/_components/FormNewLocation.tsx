import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if (store) return null;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            ...authHeaders(),
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }
    })
    return (
        <form action={createLocation} className='bg-red-600 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
            <h1 className='text-2xl text-white text-center'> Crear Tienda </h1>
            <Input label='Nombre de la Tienda' placeholder='OxxoName' name='locationName' />
            <Input label='Dirección' placeholder='AV. siempre viva NX' name='locationAddress' />
            <Input label='Latitud' placeholder='-120' name='locationLat' />
            <Input label='Longitud' placeholder='20' name='locationLng' />
            <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
            <Button type='submit' color='primary'> Confirmar </Button>
        </form>
    )
}