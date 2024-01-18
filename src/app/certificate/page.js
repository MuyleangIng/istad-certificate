'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import sampleCertificate from '/public/certificate.jpg';
import {Card} from "flowbite-react";

export default function Page() {
    const [showDataTable, setShowDataTable] = useState(false);
    const [activeTab, setActiveTab] = useState('image');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const handleImageClick = () => {
        setShowDataTable(!showDataTable);
    };
    return (
        <div className="flex flex-col justify-center items-center bg-white">
            <div className="flex flex-wrap -mb-px text-sm font-medium text-center mt-5 ">
                <div
                    className={`px-4 py-2 ${activeTab === 'image' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                    onClick={() => handleTabClick('image')}
                >
                    Certificate
                </div>
                <div
                    className={`px-4 py-2 ${activeTab === 'card' ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 bg-gray-100 rounded-t-lg  active dark:bg-gray-800 dark:text-blue-500' : 'bg-transparent'}`}
                    onClick={() => handleTabClick('card')}
                >
                    Card
                </div>
            </div>

            {activeTab === 'image' && (
                <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
                    <Image
                        src={sampleCertificate}
                        alt="Certificate"
                        layout="responsive"
                        unoptimized
                        style={{cursor: 'pointer'}}
                    />
                </div>
            )}
            {activeTab === 'card' && (
                <Card className="w-50 mt-10">
                    <h1 className="text-center moul-font mb-1 text-xl font-medium text-gray-900 dark:text-white">ក្រសួងការងារ
                        និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ
                    </h1>
                    <h1 className="text-center moul-font mb-1 text-base font-medium text-gray-900 dark:text-white">
                        អគ្គនាយកដ្ឋានអប់រំបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ
                    </h1>
                    <h1 className="text-center moul-font mb-1 text-base font-medium text-gray-900 dark:text-white">
                        វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា
                    </h1>
                    <h1 className="text-center moul-font mb-1 text-base font-medium text-gray-900 dark:text-white">
                        Certificate of Completion
                    </h1>
                    <div className="flex flex-col items-center pb-5">
                        <Image
                            alt="LIM GECHLENG image"
                            height="96"
                            src="/img.png"
                            width="96"
                            className="mb-3 rounded-full shadow-lg w-40 h-40"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">LIM GECHLENG</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Web Design</span>
                        <div className="flex flex-col  mt-4 w-full">
                            <h1 className="text-base font-medium sovan-font">ព័ត៌មានទូទៅ</h1>
                            <div className={"mt-2"}>
                                <h1 className="text-sm sovan-font">ឈ្មោះ</h1>
                                <h1 className="text-sm">Full Name : sen</h1>
                            </div>
                            <div className={"mt-2"}>
                                <h1 className="text-sm sovan-font">ភេទ </h1>
                                <h1 className="text-sm">Gender Male</h1>
                            </div>
                            <div className={"mt-2"}>
                                <h1 className="text-sm sovan-font">ថ្ងៃខែ​ឆ្នាំ​កំណើត</h1>
                                <h1 className="text-sm">Date of Birth 9 October 2004</h1>
                            </div>
                            <div className={"mt-2"}>
                                <h1 className="text-sm sovan-font">ជំនាញ៖</h1>
                                <h1 className="text-sm ">Specialization</h1>
                            </div>
                            <div className={"mt-2"}>
                                <h1 className="text-sm sovan-font">ផ្តល់ជូននៅថ្ងៃទី៖</h1>
                                <h1 className="text-sm">Issue Date</h1>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </div>
        // <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        //     <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
        //         <Image
        //             src={sampleCertificate}
        //             alt="Certificate"
        //             layout="responsive"
        //             unoptimized
        //             onClick={handleImageClick}
        //             style={{cursor: 'pointer'}}
        //         />
        //     </div>
        //     {showDataTable && (
        //         <>
        //             <Card className="w-50">
        //
        //                 <div className="flex flex-col items-center pb-5">
        //                     <Image
        //                         alt="LIM GECHLENG image"
        //                         height="96"
        //                         src="/img.png"
        //                         width="96"
        //                         className="mb-3 rounded-full shadow-lg w-40 h-40"
        //                     />
        //                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">LIM GECHLENG</h5>
        //                     <span className="text-sm text-gray-500 dark:text-gray-400">Web Design</span>
        //                     <div className="flex flex-col  mt-4 w-full">
        //                         <h1 className="text-base font-medium sovan-font">ព័ត៌មានទូទៅ</h1>
        //                         <div className={"mt-2"}>
        //                             <h1 className="text-sm sovan-font">ឈ្មោះ</h1>
        //                             <h1 className="text-sm">Full Name : sen</h1>
        //                         </div>
        //                         <div className={"mt-2"}>
        //                             <h1 className="text-sm sovan-font">ភេទ </h1>
        //                             <h1 className="text-sm">Gender Male</h1>
        //                         </div>
        //                         <div className={"mt-2"}>
        //                             <h1 className="text-sm sovan-font">ថ្ងៃខែ​ឆ្នាំ​កំណើត</h1>
        //                             <h1 className="text-sm">Date of Birth 9 October 2004</h1>
        //                         </div>
        //                         <div className={"mt-2"}>
        //                             <h1 className="text-sm sovan-font">ជំនាញ៖</h1>
        //                             <h1 className="text-sm ">Specialization</h1>
        //                         </div>
        //                         <div className={"mt-2"}>
        //                             <h1 className="text-sm sovan-font">ផ្តល់ជូននៅថ្ងៃទី៖</h1>
        //                             <h1 className="text-sm">Issue Date</h1>
        //                         </div>
        //
        //                     </div>
        //                 </div>
        //             </Card>
        //         </>
        //     )}
        // </div>
    );
}

// import Image from 'next/image';
// import sampleCertificate from '/public/certificate.jpg'; // Adjust the path to your image file
//
// const desc = "Certificate of Completion";
//
// export const metadata = {
//     title: 'Certificate - CSTAD',
//     description: desc,
// }
// export default function Page() {
//     return (
//         <div className="flex flex-col lg:flex-row bg-white h-full">
//             <div className="flex-1 flex flex-col items-center">
//                 <div className="w-full p-5 shadow-lg bg-white max-w-[70rem] mx-auto my-8">
//                     <Image
//                         src={sampleCertificate}
//                         alt="Certificate"
//                         layout="responsive"
//                         unoptimized
//                     />
//                 </div>
//                 <div className="hidden lg:block w-full bg-gray-100 p-4 text-center">
//                     <span>Center of Science and Technology Advanced Development | All Rights Reserved</span>
//                 </div>
//             </div>
//             <div className="hidden lg:block lg:w-64 bg-gray-800 text-white p-4 min-h-screen">
//                 <p>Sidebar Content</p>
//             </div>
//         </div>
//
//     );
// }
// "use client"
// import Image from 'next/image';
// import sampleCertificate from '/public/certificate.jpg';
// import DataTable from "/public/istad-thumbnail.png";
// import {useState} from "react";
// const desc ="Certificate of Completion";
// export const metadata = {
//     title: 'Certificate - CSTAD',
//     description: desc,
// }
// export default function Page() {
//     const [showDataTable, setShowDataTable] = useState(false);
//
//     const handleImageClick = () => {
//         setShowDataTable(!showDataTable);
//     };
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-white">
//             <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
//                 <Image
//                     src={sampleCertificate}
//                     alt="Certificate"
//                     layout="responsive"
//                     unoptimized
//                     onClick={handleImageClick} // Add click handler to the image
//                     style={{cursor: 'pointer'}} // Optional: change cursor on hover
//                 />
//             </div>
// {showDataTable && (
// <DataTable/>

// <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
//     <Image
//         src={DataTable}
//         alt="Certificate"
//         layout="responsive"
//         unoptimized
//         onClick={handleImageClick} // Add click handler to the image
//         style={{cursor: 'pointer'}} // Optional: change cursor on hover
//     />
// </div>

// Replace with your actual datatable component or structure
// For example, it could be a component that takes the image data and displays related information
//     )}
// </div>
// <div className="flex justify-center items-center  min-h-screen bg-white ">
//     <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
//         <Image
//             src={sampleCertificate}
//             alt="Certificate"
//             layout="responsive"
//             unoptimized
//         />
//     </div>
// </div>
//     );
// }