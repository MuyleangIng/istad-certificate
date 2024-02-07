'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem('apiResponse');
            if (!user) {
                router.push('/');
            }
        }
    }, [router]);
    return <>{children}</>;
};

export default ProtectedRoute;