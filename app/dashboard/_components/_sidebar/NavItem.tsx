'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
    icon: ReactNode
    path: string
}

const NavItem = ({ icon, path  }: NavItemProps) => {
    const pathName = usePathname();
    return (
        <Link href={path} className={pathName === path ? 'bg-red-600 w-full flex justify-center transition-colors' : ''}>
            {icon}
        </Link>
    )
}

export default NavItem;