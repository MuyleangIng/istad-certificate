"use client"
import React from 'react';
import Link from "next/link";
import {FaTelegramPlane} from "react-icons/fa";
function SbFooter(){
    return(
        <>
            <footer className="bg-custom-blue button-0">
                <div className=" mx-auto w-full py-2 lg:py-4 ">
                    <div className="text-white flex  space-x-6 sm:mt-0 sm:justify-center items-center"
                    >
                        <div className={"justify-center  items-center text-xs sm:text-base px-4 sm:px-0"}>
                            <Link className={"text-white text-center text-xs sm:text-base"} href="https://istad.co/"
                                  target={"_blank"}>ISTAD™ </Link>
                            Learn in demand skills and get a certificate of your own on ISTAD Academy
                        </div>
                        <div className="flex flex-wrap gap-2 pr-2">
                            <Link href="https://t.me/istadckh" target="_blank" rel="noopener noreferrer"
                               className="inline-block">
                                <div
                                    className="w-[7rem] flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  py-2 px-2 rounded-lg text-xs sm:text-sm">
                                    Join Now
                                    <div className="ml-2 h-4 w-4 sm:h-5 sm:w-5 ">
                                        <FaTelegramPlane className="fill-current"/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SbFooter