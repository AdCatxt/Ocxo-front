'use client';
import { Button, Input } from "@heroui/react";
import { Link } from '@heroui/react'
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault()
        const formData = new FormData(e.target);
        let authData: any = {}
        authData.userEmail = formData.get('userEmail');
        authData.userPassword = formData.get('userPassword');
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                body: JSON.stringify(authData),
                credentials: 'include',
            });
            if (response.status === 201) router.push('/dashboard')
            setSubmitting(false)
        } catch (e) {
            setSubmitting(false)
        }
        return;
    }

    return (
        <form className='bg-yellow-400 px-10 py-2 rounded-md' onSubmit={handleSubmit}>
            <p className='text-2xl my-4 text-white'>Inicio de Sesión</p>
            <div className='flex flex-col gap-2 my-4'>
                < Input label='Email' name='userEmail' type='email' isRequired={true} size='sm' />
                < Input label='Contraseña' name='userPassword' type='password' isRequired={true} size='sm' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button
                    color='primary'
                    type='submit'
                    disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Iniciar Sesión'}
                </Button>
                <div className='flex items-center gap-1'>
                    <p className='text-white'>¿No tienes cuenta?</p>
                    <Link href='/singup' className='underline'>Registrate</Link>
                </div>
            </div>
        </form>
    )
}