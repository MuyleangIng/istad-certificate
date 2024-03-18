'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import Login from "@/app/login/Login";
import SignIn from "@/components/SignIn";

function MainSignIn() {
    const pathname = usePathname();
    return (
        <div>
            {pathname === '/' ? (
                <SignIn/>
            ) : pathname.startsWith('/login') ? (
                <Login/> // Assuming <Login /> is your component for logging in users
            ) : null}
        </div>
    );
}

export default MainSignIn;