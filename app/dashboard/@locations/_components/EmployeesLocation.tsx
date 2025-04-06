import axios from 'axios';
import { cookies } from 'next/headers';
import { Employee } from '@/entities';
import { API_URL, TOKEN_NAME } from '@/constants';
import { CardHeader, Card, CardBody, Divider } from '@heroui/react';

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data.map((employee) => {
        const fullName = employee.employeeName + ' ' + employee.employeeLastName;
        return <Card className='mx-10 my-10'>
            <CardHeader>
                <p className='w-full'>Nombre: <b>{fullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className='w-full'><b>Teléfono: </b> {employee.employeePhone}</p>
                <p className='w-full'><b>Email: </b>{employee.employeeEmail}</p>
            </CardBody>
        </Card>
    })
}