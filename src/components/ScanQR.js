'use client'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, TextInput, Button, Alert} from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Note: The correct import is 'next/router', not 'next/navigation'
import { Formik, Form, Field, ErrorMessage } from "formik";
import SbDatepicker from "@/components/SbDatepicker";
import moment from "moment";
import * as Yup from "yup";
import { RiCalendar2Fill, RiSearchLine } from "react-icons/ri";
import LoadingIndicator from "@/components/SbLoadingIndicator";

function ScanQR({ params }) {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [resErr, setResErr] = useState(null);

    // useEffect(() => {
    //     // Sample data to be sent with the request
    //     const nameEn = "Chan Chhaya";
    //     const dob = "1998-09-04";
    //
    //     // Construct the query parameters
    //     const queryParams = new URLSearchParams({
    //         nameEn: nameEn,
    //         dob: dob,
    //     }).toString();
    //
    //     // Construct the full URL with query parameters
    //     const apiUrl = `http://188.166.229.56:16001/api/v1/results/students/eae4be45-9729-445b-827d-ce3562ef27d9`;
    //     fetch(apiUrl)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log("Data from API:", data);
    //             // Handle the data here
    //         })
    //         .catch(error => {
    //             console.error('Error from API:', error);
    //             // Handle the error here
    //         });
    // }, []);
    const handleSubmit = (values, { setSubmitting }) => {
        setIsLoading(true);
        console.log("Form Values:", values);
        const requestBody = {
            nameEn: values.username,
            dob: values.dob,
        };
        axios.post('http://188.166.229.56:16001/api/v1/results/checking', requestBody)
            .then(response => {
                console.log("Response from API:", response.data);
                localStorage.setItem('apiResponse', JSON.stringify(response.data));
                const storedData = localStorage.getItem('apiResponse');
                console.log("Stored Data:", storedData);
                const data = JSON.parse(storedData);
                const uuid = data.data
                console.log("Parsed Data:", uuid);
                router.push(`/dashboard/`);
            })
            .catch(error => {
                console.error('Error from API:', error);
                setResErr(error.response?.data?.message);
                console.log("Error:", error.response?.data?.message)
            })
            .finally(() => {
                setIsLoading(false);
                setSubmitting(false);
            });
    };

    const validationSchema = Yup.object().shape({
        dob: Yup.string().required('Date of birth is required'),
        username: Yup.string().required('Full Name is required'),
    });

    return (
        <section className={"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"}>
            <div className=" rounded-lg md:mt-0 xl:p-0">
                <Card className={"mt-5 border-0"}>
                    <div className={"flex justify-center items-center"}>
                        <Image src={"/istad.png"}
                               alt={"istadlogo"}
                               width={500}
                               height={500}
                               unoptimized
                        />
                    </div>
                    <h2 className={"font-bold text-blue-800 dark:text-blue-600 text-xl text-center"}>Welcome to CSTAD</h2>
                    {resErr ? (
                        <Alert color="failure" className={"w-full"}>
                            {typeof resErr === "string" ? (
                                resErr
                            ) : (
                                <ul>
                                    <li>{resErr.message}</li>
                                </ul>
                            )}
                        </Alert>
                    ) : null}
                    <Formik
                        initialValues={{
                            username: '',
                            dob: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="username"
                                           className="block mb-2 text-sm font-medium text-blue-700 dark:text-white ">
                                        Full Name
                                    </label>
                                    <Field
                                        as={TextInput} id="username" name="username" placeholder="Enter your full name"
                                        type="text"/>
                                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm"/>
                                </div>
                                <div className={'relative '}>
                                    <label htmlFor="dob"
                                           className="block mb-2 text-sm font-medium text-blue-700 dark:text-white left-3">
                                        Date of birth
                                    </label>
                                    <Field className="pl-12"
                                        name="dob">
                                        {({ field, form, meta }) => (
                                            <SbDatepicker
                                                value={field.value}
                                                onChange={(selectedDate) => form.setFieldValue("dob", moment(selectedDate).format('YYYY-MM-DD'))}
                                                show={show}
                                                setShow={setShow}
                                                color="blue"
                                                className="pl-12"
                                            >
                                            </SbDatepicker>
                                        )}
                                    </Field>
                                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm"/>
                                </div>
                                <div>
                                    <div className="flex items-center justify-center gap-5">
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                color="blue"
                                                type="submit"
                                                disabled={isSubmitting}>
                                                Search
                                                <RiSearchLine className="ml-2 h-5 w-5"/>
                                                <LoadingIndicator width={7} height={7} className={isLoading ? '' : 'hidden'} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </div>
        </section>
    );
}

export default ScanQR;
