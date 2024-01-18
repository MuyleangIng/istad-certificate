import Image from 'next/image';
import sampleCertificate from '/public/certificate.jpg';

export default function page() {
    return (
        <div className="bg-white p-10 shadow-lg max-w-4xl mx-auto my-8">
            <Image src={sampleCertificate} alt="Certificate" layout="responsive" />
        </div>
    );
}
