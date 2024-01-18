'use client'

import React from 'react';
import {useReadLocalStorage} from "usehooks-ts";
import {Button, Flowbite, Footer, Navbar} from "flowbite-react";
import HandleNavbar from "@/components/HandleNavbar";
import Link from "next/link";
import SbFooter from "@/components/SbFooter";

function MainLayout({children}) {
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    return (
        <Flowbite theme={{dark: themeMode ? (themeMode === 'dark') : true}}>
            <HandleNavbar/>
            {children}

        </Flowbite>

    );
}


export default MainLayout;