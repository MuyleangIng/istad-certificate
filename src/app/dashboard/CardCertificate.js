import React from 'react';
import {ImConnection} from "react-icons/im";

import {IoGitBranchOutline} from "react-icons/io5";
import {FaGithubAlt, FaLink} from "react-icons/fa";

import {MdOutlineDateRange} from "react-icons/md";
import {VscGitCommit} from "react-icons/vsc";

function CardCertificate() {


    return (<>

        <div
            // key={index}
             className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
            <div className="p-4 space-y-4">
                <div className="flex justify-between items-center space-x-4">
                    <div className="flex items-center">
                        <div className="shrink-0 mr-4">
                            {/*<ImConnection className={"mb-2 text-3xl text-cyan-100"}/>*/}
                            Certificate
                            {/*<AiOutlineDisconnect className={"mb-2 text-3xl text-red-600"}/>*/}
                        </div>
                        {/*<Tooltip content={deployApp?.name}>*/}
                        {/*    <h4 onClick={handleDeployApp}*/}
                        {/*        className="text-center capitalize truncate font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:text-cyan-500">*/}
                        {/*        {deployApp?.name.length > 15 ? deployApp?.name.substring(0, 20) + '...' : deployApp?.name}*/}
                        {/*    </h4>*/}
                        {/*</Tooltip>*/}
                    </div>
                    {/*<div className={"border-gray-200 dark:border-gray-700"}>*/}
                    {/*    <DropdownMenu deployApp={deployApp} setShowConfirmationModal={setShowConfirmationModal}/>*/}
                    {/*</div>*/}
                </div>

                <div className="space-y-4">
                    <div
                        className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
                    >
                        <MdOutlineDateRange className="mr-2 text-lg"/>
                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                            aaa
                            {/*{deployApp?.createdAt ? moment(deployApp.createdAt).format('MMM Do YY, h:mm:ss a') : 'No date available'}*/}
                        </p>
                    </div>

                    <div
                        className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
                    >
                        {/*<VscGitCommit className="mr-2 text-lg"/>*/}
                        <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                            {/*{deployApp?.appType}*/}
                            Name : sen kimsin
                        </p>
                    </div>
                </div>
                <div className="flex space-x-6 border-y border-gray-200 py-3 dark:border-gray-700">
                    <div
                        className="flex items-center text-sm font-medium text-gray-500   dark:text-gray-400 dark:hover:text-white"
                    >
                        {/*<IoGitBranchOutline className="mr-2 text-lg"/>*/}
                        {/*{deployApp?.defaultBranch}*/}
                        Specialization : Web Design
                    </div>
                    <div
                        className="flex items-center font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
                    >
                        {/*<FaGithubAlt className="mx-4 text-md"/>*/}
                        {/*aaa*/}
                        {/*{deployApp?.sourceType}*/}
                    </div>
                </div>
                <div className="flex border-gray-200 dark:border-gray-700">
                    <div
                        // as={Link}
                        //  href={"/app/deploy-apps/id/resource"}
                         className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-cyan-500 cursor-pointer dark:hover:text-white">
                        {/*<FaLink className=" truncate mr-2 text-sm"/>*/}
                        <h1 className="text-sm">Issue Date : 01.02.2023</h1>
                        <span className="truncate">
                        {/*<Link className="font-medium" target="_blank" rel="noopener noreferrer"*/}
                        {/*      href={`https://${deployApp?.domains[0]?.subdomain}.automatex.dev`} passHref>*/}
                        {/*    {deployApp?.domains[0]?.subdomain}.automatex.dev*/}
                        {/*</Link>*/}
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