// import Image from 'next/image';
// import sampleCertificate from '/public/certificate.jpg';
// const desc ="Certificate of Completion";
// export const metadata = {
//     title: 'Certificate',
//     description: desc,
// }
// export default function page() {
//     return (
//         <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
//             <Image src={sampleCertificate} alt="Certificate" layout="responsive" />
//         </div>
//     );
// }
import Image from 'next/image';
import sampleCertificate from '/public/certificate.jpg'; // Make sure the path is correct
const desc ="Certificate of Completion";
export const metadata = {
    title: 'Certificate - CSTAD',
    description: desc,
}
export default function Page() {
    return (
        <div className="flex justify-center items-center  min-h-screen bg-white ">
            <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
                <Image
                    src={sampleCertificate}
                    alt="Certificate"
                    layout="responsive"
                />
            </div>
        </div>
    );
}
