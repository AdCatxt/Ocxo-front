import { Image } from "@heroui/react"

export default function Header() {
    return (
        <div className='w-screen h-[10vh] bg-yellow-400 flex flex-row items-center px-10'>
            <Image src='oxxo-logo.svg' width={100} height={0} alt='Ocxo Logo' draggable={false} />
        </div>
    )
}