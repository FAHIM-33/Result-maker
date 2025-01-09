"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav(props) {
    const pathName = usePathname()
    return (
        <nav className="">
            <div className="space-x-4 text-end p-4">
                <Link href='/all-users' className={`${pathName === '/all-users' ? 'bg-white text-black rounded-md p-2' : ''}`}>All students</Link>
                <Link href='/' className={`${pathName === '/' ? 'bg-white text-black rounded-md p-2' : ''}`}>Calculator</Link>
            </div>
        </nav>
    );
}

export default Nav;