import ScanQR from "@/components/ScanQR";

const desc = "Welcome to ISTAD";
export const metadata = {
    title: 'CSTAD ',
    description: desc,
    locale: 'en-US',
    category: 'CSTAD',
    type: 'website',
    siteName: 'CSTAD',
    openGraph:{
        title: 'CSTAD',
        description: desc,
        url: '/',
        siteName: 'CSTAD',
        images: [
            {
                url: "/mainlogo.png",
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: 'Home - CSTAD'
        },
        description: desc,
        creator: 'CSTAD  ',
        images: [
            "/mainlogo.png"
        ],
    }
}
export default function Home() {
    return (
        <ScanQR/>
    );
}