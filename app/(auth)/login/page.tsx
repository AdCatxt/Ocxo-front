import { Button, Input } from "@heroui/react";
import { Link } from '@heroui/react'

export default function LoginPage() {
    return (
        <div className='bg-yellow-400 px-10 py-2 rounded-md'>
            <p className='text-2xl my-4 text-white'>Inicio de Sesión</p>
            <div className='flex flex-col gap-2 my-4'>
                < Input label='Email' type='email' isRequired={true} size='sm' />
                < Input label='Contraseña' type='password' isRequired={true} size='sm' />
                < Input label='Confirmar Contraseña' type='password' isRequired={true} size='sm' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button color='primary'>Iniciar Sesión</Button>
                <div className='flex items-center gap-1'>
                <p className='text-white'>¿No tienes cuenta?</p>
                <Link href='/singup' className='underline'>Registrate</Link>
                </div>
            </div>
        </div>
    )
}