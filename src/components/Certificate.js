'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sampleCertificate from '/public/certificate.jpg';
import { Card } from "flowbite-react";
import Detectnetwork from "@/components/Detectnetwork";
import {fileImgUrl} from "@/lib/fileBase";

export default function Certificate({ params }) {
    const { uuid } = params;
    const [apiData, setApiData] = useState();
    const [activeTab, setActiveTab] = useState('card');
    const [getFromLocal, setgetFromLocal] = useState('');
    const [isOnline, setIsOnline] = useState(true);

    function convertToKhmerNumerals(numberString) {
        const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
        return numberString.split('').map(char => {
            const digit = parseInt(char, 10);
            return isNaN(digit) ? char : khmerNumerals[digit];
        }).join('');
    }

    function convertDateToKhmer(dateString) {
        const khmerMonths = {
            '01': 'មករា',
            '02': 'កុម្ភៈ',
            '03': 'មីនា',
            '04': 'មេសា',
            '05': 'ឧសភា',
            '06': 'មិថុនា',
            '07': 'កក្កដា',
            '08': 'សីហា',
            '09': 'កញ្ញា',
            '10': 'តុលា',
            '11': 'វិច្ឆិកា',
            '12': 'ធ្នូ'
        };
        const dateParts = dateString?.split('-');
        if (dateParts.length === 3) {
            const year = convertToKhmerNumerals(dateParts[0]);
            const month = khmerMonths[dateParts[1]] || convertToKhmerNumerals(dateParts[1]);
            const day = convertToKhmerNumerals(dateParts[2]);

            return `${year}-${month}-${day}`;
        } else {
            return dateString;
        }
    }
    function reverseKhmerDateString(dateString) {
        const dateParts = dateString.split('-');
        const reversedDateParts = dateParts.reverse();
        return reversedDateParts.join('-');
    }
    function safelyConvertDate(date) {
        return date ? reverseKhmerDateString(convertDateToKhmer(date)) : 'N/A'; // Replace 'N/A' with a suitable placeholder or error message
    }

    const startedDate = safelyConvertDate(getFromLocal[0]?.startedDate);
    const finishedDate = safelyConvertDate(getFromLocal[0]?.finishedDate);
    const certificateIssuedAt = safelyConvertDate(getFromLocal[0]?.certificateIssuedAt);
    const dob = safelyConvertDate(getFromLocal[0]?.student?.dob);

    function convertGenderToKhmer(gender) {
        const genderMap = {
            'Male': 'ប្រុស',
            'Female': 'ស្រី'
        };

        return genderMap[gender] || gender;
    }

    const genderEn1 = getFromLocal[0]?.student?.gender;
    const genderKh1 = convertGenderToKhmer(genderEn1);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('apiData');
            if (storedData) {
                setgetFromLocal(JSON.parse(storedData));
            }
        }
    }, []);

    useEffect(() => {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}courses/${uuid}/classes`;
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
            {isOnline ? (
                <section className={""}>
                    <div className="flex items-center justify-center text-sm font-medium text-center sticky">
                        <div
                            className={`cursor-pointer px-8 py-2 ${activeTab === 'card' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                            onClick={() => handleTabClick('card')}
                        >
                            Card
                        </div>
                        <div
                            className={`cursor-pointer px-4 py-2 ${activeTab === 'image' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                            onClick={() => handleTabClick('image')}
                        >
                            Certificate
                        </div>
                    </div>
                    <div className={"flex items-center justify-center min-h-[calc(100vh-10rem)]"}>
                        <div className="flex flex-col items-center">
                            {activeTab === 'image' && (
                                <Card className="mx-auto my-4 shadow-none border-none">
                                    <div className="flex flex-col items-center justify-center">
                                        {sampleCertificate ? (
                                            <div
                                                className="flex items-center justify-center  relative">
                                                <Image
                                                    src={sampleCertificate}
                                                    alt="Certificate"
                                                    width={900}
                                                    height={900}
                                                    className="filter blur-sm"
                                                    style={{cursor: 'pointer'}}
                                                />
                                                <span className="absolute text-xl sm:text-5xl font-bold text-blue-700">Coming Soon!!!</span>
                                            </div>


                                        ) : (
                                            <>
                                                <Image
                                                    src={sampleCertificate}
                                                    alt="Certificate"
                                                    unoptimized
                                                    width={900}
                                                    height={900}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                                <h1 className="py-2 text-xs sm:text-base font-medium text-[#253c95]">
                                                    The certificate above verifies that name <span className="font-extrabold">{getFromLocal[0]?.student?.nameEn}</span> has successfully completed the course: <span className="font-extrabold">{apiData?.title}</span>
                                                </h1>
                                            </>
                                        )}
                                    </div>
                                </Card>
                                // <Card className={"mx-auto my-4 shadow-none border-none"}>
                                //     <div>
                                //         <div className={"flex flex-col items-center"}>
                                //             <Image
                                //                 src={sampleCertificate}
                                //                 alt="Certificate"
                                //                 unoptimized
                                //                 width={900}
                                //                 height={900}
                                //                 style={{cursor: 'pointer'}}
                                //             />
                                //         </div>
                                //         <h1 className={"py-2 text-xs sm:text-base font-medium text-[#253c95]"}>The
                                //             certificate
                                //             above
                                //             verifies that name <span
                                //                 className={"font-extrabold"}>{getFromLocal[0]?.student?.nameEn}</span> has
                                //             successfully completed the course : <span
                                //                 className={" font-extrabold"}>{apiData?.title}</span>
                                //         </h1>
                                //     </div>
                                // </Card>
                            )}
                            {activeTab === 'card' && (
                                <div className={"flex flex-col md:flex-row gap-4 p-10 "}>
                                    <Card className="mt-10 w-50 sm:w-[40rem] shadow-none border-[1px]">
                                        <h1 className="text-center moul-font mb-1 text-sm sm:text-xl font-medium text-gray-900 dark:text-white">
                                            ក្រសួងការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ
                                        </h1>
                                        <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                            អគ្គនាយកដ្ឋានអប់រំបណ្តុះបណ្តាលបច្ចេកទេស <span
                                            className=" mt-[1.25rem] block sm:inline">និងវិជ្ជាជីវៈ</span>
                                        </h1>
                                        <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                            វិញ្ញាបនបត្រវិជ្ជាជីវៈ
                                        </h1>
                                        <h1 className="text-center moul-font mb-1 text-xs sm:text-base font-medium text-gray-900 dark:text-white">
                                            Vocational of Certificate
                                        </h1>

                                        <div className="flex flex-col items-center pb-5">
                                            <div>
                                                <Image
                                                    alt={getFromLocal[0]?.student?.nameEn}
                                                    height="96"
                                                    src={fileImgUrl(getFromLocal[0]?.student?.photoUri) ? fileImgUrl(getFromLocal[0]?.student?.photoUri): '/public/avatar.png'}
                                                    width="96"
                                                    unoptimized
                                                    className="mb-[1.75rem] rounded-[7px] shadow-lg  h-[13rem] w-40 object-fill"
                                                />
                                            </div>

                                            <h5 className="mb-1 text-xl  text-[#253c95] siemreap-bold">{getFromLocal[0]?.student?.nameKh}</h5>
                                            <span
                                                className="text-lg font-semibold text-[#fdb913]">{apiData?.title}</span>
                                            <div className="flex flex-col  mt-4 w-full">
                                                <h1 className="text-xl font-semibold sovan-font">ព័ត៌មានទូទៅ ៖ </h1>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ឈ្មោះ
                                                        ៖<span
                                                            className={"font-extrabold pl-[3.5rem] siemreap-bold"}>{getFromLocal[0]?.student?.nameKh}</span>
                                                    </h1>
                                                    <h1 className="text-sm">Full Name : <span
                                                        className={"font-semibold pl-6 "}>{getFromLocal[0]?.student?.nameEn}</span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ភេទ
                                                        ៖ <span
                                                            className={"font-extrabold pl-[4rem] siemreap-bold"}>{genderKh1}</span>
                                                    </h1>
                                                    <h1 className="text-sm">Gender : <span
                                                        className={"font-semibold pl-[2.5rem]"}>{getFromLocal[0]?.student?.gender}</span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ថ្ងៃខែ​ឆ្នាំ​កំណើត
                                                        ៖ <span
                                                            className={"font-semibold pl-2 siemreap-bold"}>{dob}</span>
                                                    </h1>
                                                    <h1 className="text-sm">Date of Birth :
                                                        <span
                                                            className={"font-semibold pl-3"}>
                                                {getFromLocal[0]?.student?.dob}
                                                </span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ជំនាញ ៖<span
                                                        className={"font-semibold pl-14 siemreap-bold"}>
                                                {apiData?.title}
                                                </span>
                                                    </h1>
                                                    <h1 className="text-sm ">Specialization : <span
                                                        className={"font-semibold"}>
                                                {apiData?.title}
                                                </span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font ">ថ្ងៃចូលរៀន ៖ <span
                                                        className={"font-semibold pl-8 siemreap-bold"}>
                                                {startedDate}
                                                </span>
                                                    </h1>
                                                    <h1 className="text-sm "> Started Date : <span
                                                        className={"font-semibold pl-2"}>
                                                {getFromLocal[0]?.startedDate}
                                                </span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ថ្ងៃបញ្ចប់ ៖ <span
                                                        className={"font-semibold pl-12"}>
                                                {finishedDate}
                                                </span>
                                                    </h1>
                                                    <h1 className="text-sm ">Finished Date :<span
                                                        className={"font-semibold pl-2"}>
                                                {getFromLocal[0]?.finishedDate}
                                                </span>
                                                    </h1>
                                                </div>
                                                <div className={"mt-3"}>
                                                    <h1 className="text-sm sovan-font">ផ្តល់ជូននៅថ្ងៃទី ៖<span
                                                        className={"font-semibold pl-4"}>{certificateIssuedAt}</span>
                                                    </h1>
                                                    <h1 className="text-sm">Issue Date
                                                        : <span
                                                            className={"font-semibold pl-6"}>
                                                    {getFromLocal[0]?.certificateIssuedAt} </span></h1>
                                                </div>
                                            </div>
                                            <h1 className={"py-2 text-xs sm:text-base font-medium text-[#253c95]"}>The
                                                certificate
                                                above
                                                verifies that name <span
                                                    className={"font-extrabold"}>{getFromLocal[0]?.student?.nameEn}</span> has
                                                successfully completed the course : <span
                                                    className={" font-extrabold"}>{apiData?.title}</span>
                                            </h1>
                                        </div>
                                    </Card>
                                    <div
                                        className="border border-gray-200 dark:border-gray-700 rounded-lg mt-10 p-4 mb-[2rem] h-full">
                                        <div className="p-4 space-y-4  w-[18rem]">
                                            <div className={" font-bold text-[#253c95] text-xl "}>
                                                Topic Cover
                                            </div>
                                            <div className="flex justify-between items-center space-x-4">
                                                <div className="flex items-center">
                                                    <div className="shrink-0 mr-4">
                                                        {apiData?.title}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                {Array.isArray(apiData?.offer?.details) && apiData.offer.details.map((item, index) => (
                                                    <div key={index}
                                                         className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white">
                                                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400 text-wrap">
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
                    </div>
                </section>

            ): (
                <Detectnetwork/>
            )

            }
        </>
    );
}

