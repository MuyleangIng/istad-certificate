'use client'

import React from 'react';
import {useReadLocalStorage} from "usehooks-ts";
import {Button, Flowbite, Footer, Navbar} from "flowbite-react";
import HandleNavbar from "@/components/HandleNavbar";
import Link from "next/link";
import SbFooter from "@/components/SbFooter";
import {usePathname, useRouter} from "next/navigation";

function MainLayout({children}) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <Flowbite>
            <HandleNavbar/>
            {children}
            <SbFooter/>
            {/*{( pathname.startsWith('/certificate/')) && (*/}
            {/*    <SbFooter/>*/}
            {/*)}*/}
        </Flowbite>

    );
}


export default MainLayout;