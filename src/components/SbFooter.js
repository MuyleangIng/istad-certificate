"use client"
import React from 'react';
import Link from "next/link";
function SbFooter(){
    return(
        <>
            <footer className="fixed bottom-0 w-full z-50 bg-custom-blue md:static lg:static">
                <div className="w-full bg-custom-blue  py-2 ">
                    <div className="text-white flex space-x-6 sm:mt-0 sm:justify-center">
                        <div className={"justify-center items-center text-xs sm:text-base px-4 sm:px-0"}>
                            <Link className={"text-white text-center text-xs sm:text-base"} href="https://istad.co/"
                                  target={"_blank"}>ISTAD™ </Link>
                            Learn in demand skills and get a certificate of your own on GL Academy
                        </div>
                        <div className={"px-4 sm:px-0"}>
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                <Link href="https://istad.co/" target={"_blank"}>Join Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SbFooter