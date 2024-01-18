"use client"
import Image from 'next/image'
import { Button } from "flowbite-react";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {useRouter} from "next/navigation";
import logo from "/public/istad.jpg";
function NotFound() {
    const router = useRouter();

    return (
        <section className={"px-5 py-14 lg:px-0 bg-cover bg-center bg-no-repeat "}>
            <div className={"max-w-screen-xs lg:max-w-screen-xl mx-auto px-5 sm:px-0 py-14 md:py-10 lg:py-0"}>
                <div className={"flex items-center justify-center py-3"}>
                    <Image width={150} height={150} unoptimized src={logo}
                           alt="error image"/>
                </div>
                <div className="items-center">

                    <div>
                        <div className="max-w-md mx-auto">
                            <div className={"flex items-center flex-col gap-5 sm:items-start"}>
                                <h3 className={"text-blue-800 dark:text-white text-2xl opacity-90 font-bold"}>Page Not
                                    Found..!</h3>
                                <p className={"opacity-80"}>
                                    Sorry! This page is not found..!
                                </p>
                                <div className="flex gap-3">
                                    <Button
                                        pill
                                        outline
                                        className={"uppercase bg-blue-700"} onClick={() => router.push("/")}>

                                        <span className="text-base px-5 flex items-center gap-2">
                                                Go Back
                                                <IoMdArrowRoundForward className="h-5 w-5"/>
                                            </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default NotFound;