'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import SignIn from "@/components/SignIn";
import {useEffect, useState} from "react";

function Login() {

    const searchParams = useSearchParams();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    useEffect(() => {
        setName(searchParams.get('name'));
        setDob(searchParams.get('dob'));
    }, []);
    console.log('name', name)
    console.log('dob', dob)


    return (
        <>
            <div>
                <SignIn name={name} dob={dob} />
            </div>
        </>
    );
}
export default Login;