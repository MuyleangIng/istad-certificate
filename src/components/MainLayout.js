'use client'

import React from 'react';
import { Flowbite} from "flowbite-react";
import HandleNavbar from "@/components/HandleNavbar";
import SbFooter from "@/components/SbFooter";
import {usePathname} from "next/navigation";

function MainLayout({children}) {
    const pathname = usePathname();
    return (
        <Flowbite>
            <HandleNavbar/>
            {children}
            {(pathname.startsWith('/dashboard') || pathname.startsWith('/certificate/')) && (
                <SbFooter/>
            )}
        </Flowbite>
    );
}
export default MainLayout;