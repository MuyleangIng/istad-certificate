import React from 'react';
import {Button, Dropdown, Navbar} from 'flowbite-react';
import Link from 'next/link';
import HandleImage from "@/components/HandleImage";
import {usePathname, useRouter} from 'next/navigation'; // Corrected import
import Image from "next/image";
function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const handleSignOut = async () => {
        router.push('/');
    };
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
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<span>
                                <span className="sr-only">User menu</span>
                                  <Image
                                      src={"/messi.jpg"}
                                      alt="user"
                                      width={40}
                                      height={40}
                                      className="rounded-full"
                                  />


                            </span>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm"></span>
                            <span className="block truncate text-sm font-medium">
                                 {/*{res?.email ? res.email : "automatex@gmail.com"}*/}
                                istad.co@gmail.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href={"/dashboard"}>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                        <div>
                            <Dropdown.Item
                                onClick={handleSignOut}
                                className=" focus:text-white focus:bg-red-500 dark:focus:bg-red-500  lg:inline"
                            >
                                Sign out
                            </Dropdown.Item>
                        </div>

                    </Dropdown>
                        // <Button size={"sm"}
                        //         className={`bg-cyan-500 justify-end text-white`}
                        //         as={Link} href={"/dashboard"}>Dashboard
                        // </Button>

                )}
            </div>
        </Navbar>
    );
}

export default HandleNavbar;
