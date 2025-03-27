import { Button, Input } from "@heroui/react";
import { Link } from '@heroui/react'

export default function SingUpPage() {
    return (
        <div className='bg-yellow-400 px-10 py-2 rounded-md'>
            <p className='text-2xl my-4 text-white'>Registrarse</p>
            <div className='flex flex-col gap-2 my-4'>
                < Input label='Email' type='email' isRequired={true} size='sm' />
                < Input label='Contraseña' type='password' isRequired={true} size='sm' />
                < Input label='Confirmar Contraseña' type='password' isRequired={true} size='sm' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button color='primary'>Registrate</Button>
                <div className='flex items-center gap-1'>
                    <p className='text-white'>¿Ya tienes cuenta?</p>
                    <Link href='/login' className='underline'>Inicia Sesión</Link>
                </div>
            </div>
        </div>
    )
}