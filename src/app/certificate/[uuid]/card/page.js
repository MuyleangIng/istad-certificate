import Certificate from "@/components/Certificate";

export const metadata = {
    title: 'Certificate',
    description: 'Welcome to Certificate .',
}

export default function page({params}) {
    return (
        <Certificate params={params}/>
    );
}