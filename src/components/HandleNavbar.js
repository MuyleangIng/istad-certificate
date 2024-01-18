"use client"
import React from 'react';
import {Button, Navbar, Dropdown} from 'flowbite-react';
import Link from 'next/link';
import HandleImage from "@/components/HandleImage";



function HandleNavbar() {
    return (
        <Navbar container="true"  className={`cus-navbar bg-custom-blue sticky top-0 left-0 z-50 lg:px-3 dark:bg-gray-900`}>
            <Navbar.Brand as={Link} href={"/"} style={{
                fontFamily: 'inherit', fontWeight: 'bold', color: '#ff6347', fontSize: '30px', letterSpacing: '2px'
            }}>
                <HandleImage src={"/logoistad.png"} w={14} h={15}/>
                <span className="text-white tracking-widest text-2xl"
                      style={{fontFamily: "'Inter-Black', sans-serif"}}>
                  CSTAD
                </span>
            </Navbar.Brand>
        </Navbar>
    );


}

export default HandleNavbar;


