'use client'
import React from 'react';
import Link from "next/link";
import {Button, Card} from "flowbite-react";
import Image from "next/image";
import Imagess from "../../../public/web.png";
function page(props) {
    const uuid = data?.uuid
    console.log(data)
    return (
        <>
            <h1 className={"font-bold text-blue-800 text-2xl text-center mt-5"}
            >
                Certificate of Completion
            </h1>
            <div className={"flex justify-center m-4  p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10   gap-4"}>
                <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  gap-3 lg:gap-6`}>
                    {data.map((item, index) => (
                        <div key={index}>
                            <Card
                                as={Link}
                                href={`/certificate/${uuid}/card`}
                                className="max-w-sm items-center justify-center p-[2.25rem]"
                                renderImage={() =>
                                    <Image
                                        width={200}
                                        height={200}
                                        src={Imagess}
                                        alt="image 1" />}
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                            </Card>
                        </div>
                    ))}

                </div>
            </div>
        </>

    );
}

export default page;
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
