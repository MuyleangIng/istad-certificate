'use client'
import React, {useEffect, useState} from 'react';
import {IoAddSharp} from "react-icons/io5";
import Link from "next/link";
import {BsFillGridFill, BsListUl} from "react-icons/bs";
import {Button, Card} from "flowbite-react";
import CardDashbaord from "@/app/dashboard/CardDashbaord";
import CardCertificate from "@/app/dashboard/CardCertificate";
function page() {
    return (
        <>
            <h1 className={"flex justify-center mt-5"} >
                Certificate of Completion
            </h1>
            <div
                className={"flex justify-center m-4  p-2 md:p-4 lg:p-6 xl:p-8 2xl:p-10   gap-4"}
            >
                {/*<CardCertificate/>*/}
                {/*<CardCertificate/>*/}


                <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  gap-3 lg:gap-6`}>
                    {/*<CardCertificate/>*/}
                    {/*<CardCertificate/>*/}
                    <CardCertificate/>
                    <CardCertificate/>
                    <CardCertificate/>
                    {/*<Card href="#" className="max-w-sm">*/}
                    {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
                    {/*        Noteworthy technology acquisitions 2021*/}
                    {/*    </h5>*/}
                    {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
                    {/*        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse*/}
                    {/*        chronological order.*/}
                    {/*    </p>*/}
                    {/*</Card>*/}
                    {/*<Card href="#" className="max-w-sm">*/}
                    {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
                    {/*        Noteworthy technology acquisitions 2021*/}
                    {/*    </h5>*/}
                    {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
                    {/*        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse*/}
                    {/*        chronological order.*/}
                    {/*    </p>*/}
                    {/*</Card>*/}
                    {/*<Card href="#" className="max-w-sm">*/}
                    {/*    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">*/}
                    {/*        Noteworthy technology acquisitions 2021*/}
                    {/*    </h5>*/}
                    {/*    <p className="font-normal text-gray-700 dark:text-gray-400">*/}
                    {/*        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse*/}
                    {/*        chronological order.*/}
                    {/*    </p>*/}
                    {/*</Card>*/}
                </div>


            </div>
            {/*<div className=" container grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">*/}
            {/*</div>*/}
            {/*<section className={"mt-5"}>*/}

            {/*</section>*/}
        </>

    );
}

export default page;

