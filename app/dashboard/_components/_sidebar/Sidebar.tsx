import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <nav className='w-[10vw] h-[90vh] bg-yellow-400 flex flex-col items-center py-10 justify-center gap-10'>
            <NavItem icon={<LuStore className='text-4xl' />} path='/dashboard' />
            <NavItem icon={<LuTruck className='text-4xl' />} path='/dashboard/providers' />
            <NavItem icon={<LuWheat className='text-4xl' />} path='/dashboard/products' />
            <NavItem icon={<LuUser className='text-4xl' />} path='/dashboard/managers' />
            <NavItem icon={<LuUsers className='text-4xl' />} path='/dashboard/employees' />
        </nav>
    )
}