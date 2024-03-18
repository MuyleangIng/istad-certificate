'use client';
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect, useState} from "react";
import axios from "axios";
import Lottie from "lottie-react";
import Bot from "@/app/utils/assets/loading.json";

function Login() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (name && dob) {
            setIsLoading(true);
            const requestBody = {
                nameEn: decodeURIComponent(name),
                dob: dob,
            };
            console.log("Request Body:", requestBody)
            axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}results/checking`, requestBody)
                .then(response => {
                    localStorage.setItem('apiResponse', JSON.stringify(response.data));
                    router.push(`/dashboard/`);
                })
                .catch(error => {
                    console.error('Error from API:', error);
                })
                .finally(() => {
                    console.log('Finally', name, dob)
                    setIsLoading(false);
                });
        }
    }, [router, name, dob]);
    useEffect(() => {
        setName(searchParams.get('name'));
        setDob(searchParams.get('dob'));
    }, []);
    console.log('name', name)
    console.log('dob', dob)
    if (!isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <Lottie
                    onClick={() => router.push('/dashboard')}
                    animationData={Bot} className="w-64 h-64"
                />
            </div>
        );
    }
        return null;

}

export default Login;