"use client"
import React from 'react';
import Link from "next/link";
function SbFooter(){
    return(
        <>
            <footer className="bg-custom-blue">
                <div className="mt-3 mx-auto w-full py-2 lg:py-4 ">
                    <div className="text-white flex  space-x-6 sm:mt-0 sm:justify-center items-center"
                    >
                        <div className={"justify-center  items-center text-xs sm:text-base px-4 sm:px-0"}>
                            <Link className={"text-white text-center text-xs sm:text-base"} href="https://istad.co/"
                                  target={"_blank"}>ISTAD™ </Link>
                            Learn in demand skills and get a certificate of your own on ISTAD Academy
                        </div>
                        <div className={"px-4 sm:px-0"}>
                            <button
                                className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs sm:w-25 w-25 px-4 py-2 text-white"
                            >
                                <Link href="https://istad.co/" target="_blank" rel="noopener noreferrer"
                                      className="block">
                                    Join Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default SbFooter