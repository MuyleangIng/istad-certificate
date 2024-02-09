'use client'

import React from 'react';
import { Flowbite} from "flowbite-react";
import HandleNavbar from "@/components/HandleNavbar";
import SbFooter from "@/components/SbFooter";
import {usePathname, useRouter} from "next/navigation";

function MainLayout({children}) {
    const pathname = usePathname();
    return (
        <Flowbite>
            <HandleNavbar/>
            {children}
            {( pathname.startsWith('/certificate/')) || pathname.startsWith('/dashboard/**') && (
                <SbFooter/>
            )}
        </Flowbite>

    );
}
export default MainLayout;