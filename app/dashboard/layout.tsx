import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";

export default function LayoutDashboard({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='bg-red-50'>
            <Header />
            <div className='flex flex-row'>
                <Sidebar />
                {children}
            </div>
        </div>
    );
}