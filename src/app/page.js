import SignIn from "@/components/SignIn";
const desc = "CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.";

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    manifest: process.env.NEXT_PUBLIC_APP_URL+"/icons/manifest.json",
    title: {
        template: '%s - CSTAD',
        default: 'Center of Science and Technology Advanced Development',
    },
    thumbnail:[
        "/istad-thumbnail.jpg",
    ],
    description: desc,
    locale: 'en-US',
    category: 'CSTAD',
    type: 'IT Institute',
    siteName: 'CSTAD',
    openGraph:{
        title: {
            template: '%s - CSTAD',
            default: 'Center of Science and Technology Advanced Development',
        },
        description: desc,
        url: '/',
        siteName: 'CSTAD',
        images: [
            {
                url: "/istad-thumbnail.jpg",
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: '%s - CSTAD',
            default: 'Center of Science and Technology Advanced Development',
        },
        description: desc,
        creator: 'CSTAD  ',
        images: [
            "/istad-thumbnail.jpg",
        ],
    }
}
export default function Home() {
    return (
        <SignIn/>
    );
}