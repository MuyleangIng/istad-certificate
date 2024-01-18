import React from 'react';
import ScanQR from "@/components/ScanQR";
export const metadata = {
    title: 'Share',
}
function Page({params}) {
    return (
        <>
        <ScanQR params={params}/>
        </>

    );

}
export default Page;