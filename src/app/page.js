import SignIn from "@/components/SignIn";
const desc = "Welcome to ISTAD";

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    manifest: process.env.NEXT_PUBLIC_APP_URL+"/icons/manifest.json",
    title: {
        template: '%s - CSTAD'
    },
    thumbnail:[
        "/istad-thumbnail.jpg",
    ],
    description: desc,
    locale: 'en-US',
    category: 'CSTAD',
    type: 'website',
    siteName: 'CSTAD',
    openGraph:{
        title: {
            template: '%s - CSTAD'
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
            template: 'Home - CSTAD'
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