'use client';
import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { fileImgUrl } from "@/lib/fileBase";
import photo from "/public/certificate.jpg";

export default function Dashboard() {
    const [apiData, setApiData] = useState();
    const [uuid, setUuid] = useState();

    useEffect(() => {
        // Access localStorage only on the client side
        const storedData = localStorage.getItem('apiResponse');
        if (storedData) {
            const data = JSON.parse(storedData);
            setUuid(data?.data); // Set UUID based on stored data
        }
    }, []);

    useEffect(() => {
        if (uuid) {
            const apiUrl = `http://188.166.229.56:16001/api/v1/results/students/${uuid}`;
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Data from API:", data);
                    localStorage.setItem('apiData', JSON.stringify(data.data));
                    setApiData(data.data);
                })
                .catch(error => {
                    console.error('Error from API:', error);
                });
        }
    }, [uuid]);
    return (
        <>
            <h1 className={"font-bold text-blue-800 text-2xl text-center mt-5"}
            >
                Certificate of Completion
            </h1>
            <div className={"flex justify-center m-4  p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10   gap-4"}>
                <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  gap-3 lg:gap-6`}>
                    {apiData?.map((item, index) => {
                        // Log the current item and index
                        console.log(`Item at index ${index}:`, item);

                        return (
                            <div key={index}>
                                <Card
                                    as={Link}
                                    href={`/certificate/${item?.clazz?.course?.uuid}/card`}
                                    className="max-w-sm items-center justify-center p-[2.25rem]"
                                    // renderImage={() => (
                                    //     <Image
                                    //         width={200}
                                    //         height={200}
                                    //         src={item?.clazz?.course?.thumbnail}
                                    //         alt="image 1"
                                    //     />
                                    // )}
                                >
                                    <Image src={fileImgUrl(item[1]?.clazz?.course?.thumbnailUri)? fileImgUrl(item?.clazz?.course?.thumbnailUri) : photo} alt={"thumnails"}
                                           width={200}
                                           height={200}
                                    />
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                        {item[1]?.clazz?.course?.title}
                                    </h5>
                                </Card>
                            </div>
                        );
                    })}


                </div>
            </div>
        </>

    );
}

const data = [
    {
        uuid: "1edwfrgthjki7i654324e42few",
        title: "Web Development",
        name: "Name 1"
    },
    {
        uuid: "2swdefghmjkuiyutyhrter34354",
        title: "DevOps",
        name: "Name 2"
    },
    {
        uuid: "3wdefrgthyjui8676534erfge333",
        title: "Spring Boot",
        name: "Name 3"
    },
];
