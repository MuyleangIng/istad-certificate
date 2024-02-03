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
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    return (
        <Flowbite theme={{dark: themeMode ? (themeMode === 'dark') : true}}>
            <HandleNavbar/>
            {children}
            {( pathname.startsWith('/certificate/')) && (
                <SbFooter/>
            )}
        </Flowbite>

    );
}


export default MainLayout;