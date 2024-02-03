import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
import HandleImage from "@/components/HandleImage";
import {usePathname, useRouter} from 'next/navigation'; // Corrected import

function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    // For debugging purposes
    console.log("Current pathname:", pathname);
    console.log("Current query:", router.query);

    return (
        <Navbar container="true"
                className={`cus-navbar bg-custom-blue sticky top-0 left-0 z-50 lg:px-3 dark:bg-gray-900`}>
            <Navbar.Brand as={Link} href={"/"} style={{
                fontFamily: 'inherit', fontWeight: 'bold', color: '#ff6347', fontSize: '30px', letterSpacing: '2px'
            }}>
                <HandleImage src={"/logoistad.png"} w={14} h={15}/>
                <span className="text-white tracking-widest text-2xl"
                      style={{fontFamily: "'Inter-Black', sans-serif"}}>
                    CSTAD
                </span>
            </Navbar.Brand>
            <div className={'flex items-center gap-2 md:order-2'}>
                {(pathname === '/dashboard' || pathname.startsWith('/certificate/')) && (
                    <Button size={"sm"}
                            className={`bg-cyan-500 justify-end text-white`}
                            as={Link} href={"/dashboard"}>Dashboard</Button>
                )}
                <Navbar.Toggle/>
            </div>
        </Navbar>
    );
}

export default HandleNavbar;
