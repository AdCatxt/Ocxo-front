import Image from "next/image"

export default function AuthLayout({ children }:
  Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <div className='bg-red-600 w-screen h-screen overflow-hidden grid'>
      <div className='place-content-center place-self-center text-center'>
        <div className='flex flex-col items-center my-4 bottom-100 relative'>
        <Image src='/oxxo-logo.svg' alt='Logo de Ocxo' width={200} height={0}></Image>
        </div>
        {children}
      </div>
    </div>
  )
}
