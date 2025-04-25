import { Employee } from '@/entities';
import { API_URL } from '@/constants';
import { CardHeader, Card, CardBody, Divider } from '@heroui/react';
import { authHeaders } from '@/helpers/authHeaders';

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: 'GET',
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ['dashboard:locations:employees']
        }
    });
    const data: Employee[] = await response.json()

    return data.map((employee: Employee) => {
        const fullName = employee.employeeName + ' ' + employee.employeeLastName;
        return <Card className='mx-10 my-10'>
            <CardHeader>
                <p className='w-full'>Nombre: <b>{fullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className='w-full'><b>Email: </b>{employee.employeeEmail}</p>
                <p className='w-full'><b>Teléfono: </b> {employee.employeePhone}</p>
            </CardBody>
        </Card>
    })
}
