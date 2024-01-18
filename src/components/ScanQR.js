'use client'
import React, {useState} from 'react';
import {Avatar, Button, Card, TextInput, Tooltip} from "flowbite-react";
import {FaRegCopy} from "react-icons/fa";
import {useCopyToClipboard} from "usehooks-ts";
import qrCode from "/public/qr.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {ErrorMessage, Field, Form, Formik} from "formik";
import SbDatepicker from "@/components/SbDatepicker";
import moment from "moment";
import * as Yup from "yup";
import LoadingIndicator from "@/components/SbLoadingIndicator";
import {RiSearchLine} from "react-icons/ri";

console.log(qrCode);
function ScanQR({params}) {
    const [show, setShow] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleRoute = () => {
        router.push('/sign-up');
    }
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        // const dobValue = values.dob ? moment(values.dob).format('YYYY-MM-DD') : '2000-01-01';
        // const personalInfo = {
        //     ...statePersonalInfo.personalInfo,
        //     email: session.user.email,
        //     phone: values.phone,
        //     address: values.address,
        //     dob: dobValue,
        // };
        // dispatch(setPersonalInfo(personalInfo));
        // router.push('/personal-info/step-2');
        router.push('/certificate');
    };
    const validationSchema = Yup.object().shape({
        dob: Yup.string().required('Date of birth is required'),
        username: Yup.string().required('username is required'),
    });

    return (
        <>
            <section className={"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"}>
                <div className=" rounded-lg md:mt-0 xl:p-0">
                    <Card className={"mt-5  border-0"}>
                        <div className={"flex justify-center items-center"}>
                            <Image src={"/istad.png"}
                                   alt={"istadlogo"}
                                   width={500}
                                   height={500}
                            />
                        </div>
                        <h2 className={"font-bold text-blue-800 dark:text-blue-600 text-xl text-center"}>Welcome to
                            ISTAD
                        </h2>
                        <Formik
                            initialValues={{
                                username: '',
                                dob: '2000-01-01',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="username"
                                               className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">
                                            Username
                                        </label>
                                        <Field as={TextInput} id="username" name="username" placeholder="Enter address"
                                               type="text"/>
                                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm"/>
                                    </div>
                                    <div className={'relative'}>
                                        <label htmlFor="dateofbirth"
                                               className="block mb-2 text-sm font-medium text-blue-700 dark:text-white">
                                            Date of birth
                                        </label>
                                        <Field name="dob"
                                               validate={(value) => (value ? undefined : 'Date of birth is required')}>
                                            {({field, meta}) => (
                                                <SbDatepicker
                                                    // value={field.value ? field.value : '2000-01-01'}
                                                    onChange={(selectedDate) => field.onChange(moment(selectedDate).format('YYYY-MM-DD'))}
                                                    show={show}
                                                    setShow={setShow}
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
                                                    <LoadingIndicator width={7} height={7} className={isLoading ? '' : 'hidden'} />

                                                    {/*<LoadingIndicator width={7} height={7} className={status==='loading' ? '' :'hidden' } />*/}
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
        </>
    );

}

export default ScanQR;