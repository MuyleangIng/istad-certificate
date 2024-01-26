import React from 'react';
import Imagess from "../../../public/web.png"

import {MdOutlineDateRange} from "react-icons/md";
import Image from "next/image";
import {getUserAvatar} from "@/lib/fileBase";

function CardCertificate() {


    return (<>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
            <div className="p-4 space-y-4 w-[15rem]">
                <div className="flex justify-between items-center space-x-4">
                    <div className="flex items-center">
                        <div className="shrink-0 mr-4">
                            WEB DESIGN
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div
                        className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
                    >
                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                            Name : sen kimsin
                        </p>
                    </div>
                </div>
                <div className="flex space-x-6 border-y border-gray-200 py-3 dark:border-gray-700">
                    <div className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white">
                        Specialization : Web Design
                    </div>
                </div>
                <div className="flex border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-cyan-500 cursor-pointer dark:hover:text-white">
                        <h1 className="text-sm">Issue Date : 01.02.2023</h1>
                        <span className="truncate">
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CardCertificate;

// const DropdownMenu = ({deployApp, setShowConfirmationModal}) => {
//     return (<Dropdown
//         arrowIcon={false}
//         inline
//         label={<span className=" rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//                           <span className="sr-only">Apps</span>
//                               <HiViewGrid
//                                   className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"/>
//                             </span>}>
//         <div className="grid grid-cols-3 gap-4 p-4">
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/overview`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <MdViewInAr className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Overview
//                 </div>
//             </Link>
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/resource`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <VscSourceControl className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Resources
//                 </div>
//             </Link>
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/activities`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <VscLayersActive className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Activities
//                 </div>
//             </Link>
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/access`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <TbLockAccess className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Access
//                 </div>
//             </Link>
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/report`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <TbReport className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Reports
//                 </div>
//             </Link>
//             <Link
//                 href={`/app/deploy-apps/${deployApp.uuid}/setting`}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <TbSettingsBolt className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Settings
//                 </div>
//             </Link>
//             <Link
//                 href="#"
//                 onClick={() => setShowConfirmationModal(true)}
//                 className="block rounded-lg p-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//                 <RiDeleteBin3Fill className="mx-auto mb-1 h-7 w-7 text-red-600 dark:text-white"/>
//                 <div className="text-sm font-medium text-gray-900 dark:text-white">
//                     Delete
//                 </div>
//             </Link>
//         </div>
//     </Dropdown>)
// }