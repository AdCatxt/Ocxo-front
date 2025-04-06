import { Location } from "@/entities";
import axios from "axios";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
    if (!store) return null;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        }
    })
    return (
        <Card>
            <CardHeader className='text-2xl'>
                <b className='w-full'>{data.locationName}</b>
            </CardHeader>
            <Divider />
            <CardBody className='flex flex-col w-full items-center'>
                <p className='w-full'> Manager:{' '} <Link href={{ pathname: '/dashboard/managers' }}>
                    <b>{data.manager?.managerFullName}</b></Link></p>
                <p className='w-full'>
                    Dirección: <b>{data.locationAddress}</b>
                    </p>
                <iframe
                    className='border-2 border-orange-800 rounded-md my-3'
                    width="300"
                    height="200"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBgUPFUO5g3V5MmKN4F5GJnF01tZKu40WQ
    &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}>
                </iframe>
            </CardBody>
        </Card>
    )
}