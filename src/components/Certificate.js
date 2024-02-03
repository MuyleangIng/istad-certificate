'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sampleCertificate from '/public/certificate.jpg';
import { Card } from "flowbite-react";
import SbFooter from "@/components/SbFooter";

export default function Certificate({ params }) {
    const { uuid } = params;
    const [showDataTable, setShowDataTable] = useState(false);
    const [apiData, setApiData] = useState();
    const [activeTab, setActiveTab] = useState('image');
    const [getFromLocal, setgetFromLocal] = useState('');
    console.log('getFromLocal:', getFromLocal);
    // Access localStorage only on the client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('apiData');
            if (storedData) {
                setgetFromLocal(JSON.parse(storedData));
            }
        }
    }, []);

    useEffect(() => {
        const apiUrl = `http://188.166.229.56:16001/api/v1/courses/${uuid}/classes`;
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Data from API:", data);
                setApiData(data.data);
            })
            .catch(error => {
                console.error('Error from API:', error);
            });
    }, [uuid]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white">
                <div className="flex flex-wrap -mb-px text-sm font-medium text-center ">
                    <div
                        className={`px-4 py-2 ${activeTab === 'image' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                        onClick={() => handleTabClick('image')}
                    >
                        Certificate
                    </div>
                    <div
                        className={`px-4 py-2 ${activeTab === 'card' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                        onClick={() => handleTabClick('card')}
                    >
                        Card
                    </div>
                </div>
                {activeTab === 'image' && (
                    <>
                        <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
                            <Image
                                src={sampleCertificate}
                                alt="Certificate"
                                layout="responsive"
                                unoptimized
                                style={{cursor: 'pointer'}}
                            />
                            <h1 className={"py-2 text-xs sm:text-base font-medium text-[#253c95]"}>The certificate above
                                verifies that name <span
                                    className={"font-extrabold"}>{getFromLocal[0]?.student?.nameEn}</span> has
                                successfully completed the course : <span className={" font-extrabold"}>{apiData?.title}</span>
                            </h1>
                        </div>
                    </>
                )}
                {activeTab === 'card' && (
                    <div className={"flex flex-col md:flex-row gap-4 "}>
                        <Card className="mt-10 w-50 sm:w-[40rem]">
                            <h1 className="text-center moul-font mb-1 text-sm sm:text-xl font-medium text-gray-900 dark:text-white">
                                ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ
                            </h1>
                            <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                អគ្គនាយកដ្ឋានអប់រំបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ
                            </h1>
                            <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា
                            </h1>
                            <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                Certificate of Completion
                            </h1>

                            <div className="flex flex-col items-center pb-5">
                                <Image
                                    alt="LIM GECHLENG image"
                                    height="96"
                                    src="/messi.jpg"
                                    width="96"
                                    className="mb-3 rounded-full shadow-lg w-40 h-40"
                                />
                                <h5 className="mb-1 text-xl font-bold text-[#253c95]">{getFromLocal[0]?.student?.nameEn}</h5>
                                <span className="text-lg font-semibold text-[#fdb913]">{apiData?.title}</span>
                                <div className="flex flex-col  mt-4 w-full">
                                    <h1 className="text-xl font-semibold sovan-font">ព័ត៌មានទូទៅ ៖ </h1>
                                    <div className={"mt-3"}>
                                        <h1 className="text-sm sovan-font">ឈ្មោះ ៖ {getFromLocal[0]?.student?.nameEn}</h1>
                                        <h1 className="text-sm">Full Name : {getFromLocal[0]?.student?.nameEn}</h1>
                                    </div>
                                    <div className={"mt-3"}>
                                        <h1 className="text-sm sovan-font">ភេទ ៖ {getFromLocal[0]?.student?.gender} </h1>
                                        <h1 className="text-sm">Gender : {getFromLocal[0]?.student?.gender}</h1>
                                    </div>
                                    <div className={"mt-3"}>
                                        <h1 className="text-sm sovan-font">ថ្ងៃខែ​ឆ្នាំ​កំណើត ៖ {getFromLocal[0]?.student?.dob}</h1>
                                        <h1 className="text-sm">Date of Birth : {getFromLocal[0]?.student?.dob}</h1>
                                    </div>
                                    <div className={"mt-3"}>
                                        <h1 className="text-sm sovan-font">ជំនាញ៖ {apiData?.title}</h1>
                                        <h1 className="text-sm ">Specialization : {apiData?.title}</h1>
                                    </div>
                                    <div className={"mt-3"}>
                                        <h1 className="text-sm sovan-font">ផ្តល់ជូននៅថ្ងៃទី៖ {getFromLocal[0]?.certificateIssuedAt}</h1>
                                        <h1 className="text-sm">Issue Date : {getFromLocal[0]?.certificateIssuedAt}</h1>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg mt-10 p-4 mb-[2rem] sm:mb-[20rem]">
                            <div className="p-4 space-y-4  w-[18rem]">
                                <div className="flex justify-between items-center space-x-4">
                                    <div className="flex items-center">
                                        <div className="shrink-0 mr-4">
                                            {apiData?.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {Array.isArray(apiData?.offer?.courseOffer?.details) && apiData.offer.courseOffer.details.map((item, index) => (
                                        <div key={index}
                                             className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white">
                                            <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                                                {index + 1}. {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                )}

            </div>
            {/*<SbFooter/>*/}
        </>
    );
}
