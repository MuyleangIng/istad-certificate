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
        const storedData = localStorage.getItem('apiResponse');
        if (storedData) {
            const data = JSON.parse(storedData);
            setUuid(data?.data);
        }
    }, []);
    useEffect(() => {
        if (uuid) {
            const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}results/students/${uuid}`;
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
            <div className={"flex justify-center items-center m-4  p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10   gap-4 "}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  gap-3 lg:gap-6`}>
                    {apiData?.map((item, index) => {
                        console.log(`Item at index ${index}:`, item);
                        return (
                            <div key={index}>
                                <Card
                                    as={Link}
                                    href={`/certificate/${item?.course?.uuid}/card`}
                                    className="max-w-sm items-center justify-center p-[1.25rem] md:p-[1.25rem]"
                                >
                                    <Image src={fileImgUrl(item?.course?.thumbnailUri)? fileImgUrl(item?.course?.thumbnailUri) : photo}
                                           alt={item?.course?.title ? item?.course?.title : "Certificate"}
                                           width={200}
                                           height={200}
                                    />
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
