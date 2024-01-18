'use client'

import React from 'react';
import {useReadLocalStorage} from "usehooks-ts";
import {Flowbite, Navbar} from "flowbite-react";
import HandleNavbar from "@/components/HandleNavbar";

function MainLayout({children}) {
    const themeMode = useReadLocalStorage("flowbite-theme-mode")
    return (
        <Flowbite theme={{ dark: themeMode ? (themeMode==='dark') : true }} >
            <HandleNavbar/>
            {children}
        </Flowbite>
    );
}
export default MainLayout;