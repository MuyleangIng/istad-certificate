'use client'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, TextInput, Button, Alert} from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SbDatepicker from "@/components/SbDatepicker";
import moment from "moment";
import * as Yup from "yup";
import {RiSearchLine} from "react-icons/ri";
import LoadingIndicator from "@/components/SbLoadingIndicator";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from 'date-fns';
import {MdOutlineNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";

const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
};

const years = range(1990, getYear(new Date()) + 1);
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];
function ScanQR({ params }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [resErr, setResErr] = useState(null);
    const handleSubmit = (values, { setSubmitting }) => {
        setIsLoading(true);
        console.log("Form Values:", values);
        const requestBody = {
            nameEn: values.username,
            dob: values.dob,
        };
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}results/checking`, requestBody)
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
        dob: Yup.string().required('Date of birth is required ex 1990-01-01'),
        username: Yup.string().required('Full Name is required ex John Doe'),
    });
    return (
        <section className={"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"}>
            <div className=" rounded-lg md:mt-0 xl:p-0">
                <Card className={"mt-5 border-0 shadow-sm"}>
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
                            username: 'KHOEM RADOM',
                            dob: '2001-07-05',
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
                                    <Field name="dob">
                                        {({field, form}) => (
                                            <DatePicker
                                                renderCustomHeader={({
                                                                         date,
                                                                         changeYear,
                                                                         changeMonth,
                                                                         decreaseMonth,
                                                                         increaseMonth,
                                                                         prevMonthButtonDisabled,
                                                                         nextMonthButtonDisabled,
                                                                     }) => (
                                                    <div
                                                        style={{
                                                            margin: 10,
                                                            display: "flex",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <button
                                                            className={"text-2xl"}
                                                            onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                            <GrFormPrevious />
                                                        </button>
                                                        <select
                                                            className={"rounded-md h-[2.5rem] text-center items-center"}
                                                            value={getYear(date)}
                                                            onChange={({ target: { value } }) => changeYear(value)}
                                                        >
                                                            {years.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <select
                                                            className={"rounded-md h-[2.5rem] text-center items-center"}
                                                            value={months[getMonth(date)]}
                                                            onChange={({ target: { value } }) =>
                                                                changeMonth(months.indexOf(value))
                                                            }
                                                        >
                                                            {months.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <button
                                                            className={"text-2xl"}
                                                            onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                            <MdOutlineNavigateNext />
                                                        </button>
                                                    </div>
                                                )}
                                                selected={(field.value && new Date(field.value)) || null}
                                                onChange={(date) => form.setFieldValue("dob", date ? moment(date).format('YYYY-MM-DD') : '')}
                                                dateFormat="yyyy-MM-dd"
                                                className="form-control"
                                                placeholderText="YYYY-MM-DD"
                                            />
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
                                                <LoadingIndicator width={7} height={7}
                                                                  className={isLoading ? '' : 'hidden'}/>
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
