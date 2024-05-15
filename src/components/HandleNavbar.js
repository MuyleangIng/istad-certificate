import React, {useEffect, useState} from 'react';
import {Avatar, Dropdown, Navbar} from 'flowbite-react';
import Link from 'next/link';
import HandleImage from "@/components/HandleImage";
import {usePathname, useRouter} from 'next/navigation';
import {IoIosMenu} from "react-icons/io";
function HandleNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [apiData, setApiData] = useState();
    const [uuid, setUuid] = useState();
    useEffect(() => {
        const storedData = localStorage.getItem('apiResponse');
        if (storedData) {
            const data = JSON.parse(storedData);
            setUuid(data?.data);
        }
    }, []);
    const handleSignOut = async () => {
        router.push('/');
        // remote from local storage
        localStorage.removeItem('apiData');
        localStorage.removeItem('apiResponse');
    };
    useEffect(() => {
        const apiUrls = `${process.env.NEXT_PUBLIC_BASE_URL}students/${uuid}`;
        fetch(apiUrls)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setApiData(data.data);
            })
            .catch(error => {
                console.error('Error from API:', error);
            });
    }, [uuid]);
    return (
        <Navbar container="true"
                className={`cus-navbar bg-custom-blue sticky top-0 left-0 z-50 lg:px-3 dark:bg-gray-900`}>
            <Navbar.Brand as={Link} href={"https://istad.co/"} target={"_blank"} style={{
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
                        label={
                                       <span>
                                <span className="sr-only">User menu</span>
                                 <AnimatedMenuIcon />

                            </span>
                    }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm"></span>
                            <span className="block truncate text-sm font-medium focus:bg-custom-blue hover:text-blue-700">
                                 {/*{res?.email ? res.email : "automatex@gmail.com"}*/}
                                {apiData?.nameEn ? apiData?.nameEn : "istad@gmail.com"}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} href={"/dashboard"}>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                        <div>
                            <Dropdown.Item
                                onClick={handleSignOut}
                                className=" focus:text-white focus:bg-custom-blue dark:focus:bg-red-500  lg:inline"
                            >
                                Sign out
                            </Dropdown.Item>
                        </div>
                    </Dropdown>
                )}
            </div>
        </Navbar>
    );
}

export default HandleNavbar;
function AnimatedMenuIcon() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div onClick={toggleMenu}
             className={`p-1 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? 'bg-blue-500' : ''}`}
        >
            <IoIosMenu color="#fff" size={30} />
        </div>
    );
}

