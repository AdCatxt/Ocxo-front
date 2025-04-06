import axios from "axios";
import { Location } from '@/entities';
import SelectLocation from './_components/SelectLocation';
import { API_URL } from '@/constants';
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";

const LocationsPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }
    })

    data = [{
        locationId: 0,
        locationName: 'Crear tienda nueva',
        locationLatLng: [0, 0],
        locationAddress: 'No hay'
    },
    ...data
    ]
    return (<div className='w-8/12'>
        <div className='w-full flex flex-col items-center h-[90vh] bg-red-100'>
            <div className='w-1/2'>
                <SelectLocation locations={data} store={searchParams?.store} />
            </div>
            <div className='w-8/12'>
                <LocationCard store={searchParams.store} />
            </div>
            <div className='w-5/12'>
                <FormNewLocation store={searchParams.store}/>
            </div>
            <DeleteLocationButton store={searchParams.store} />
        </div>
    </div>)
}

export default LocationsPage;