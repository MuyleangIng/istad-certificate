import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ['latin'] })
const desc = "Welcome to ISTAD";

export const metadata = {
    metadataBase: new URL('https://verify.istad.co/'),
    title: {
        template: '%s - CSTAD'
    },
    thumbnail:[
        "https://www.istad.co/resources/img/istad-thumbnail.png",
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
                url: "https://www.istad.co/resources/img/istad-thumbnail.png",
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
            "https://www.istad.co/resources/img/istad-thumbnail.png",
        ],
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainLayout>{children}
        </MainLayout>
      </body>
    </html>
  )
}
