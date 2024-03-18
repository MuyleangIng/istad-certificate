import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from "@/components/MainLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

const inter = Inter({ subsets: ['latin'] })
const desc = "CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.";
export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
    manifest: process.env.NEXT_PUBLIC_APP_URL+"/icons/manifest.json",
    title: {
        template: '%s - CSTAD',
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
        ]
    },
    // telegram: {
    //     title: {
    //         template: '%s - CSTAD',
    //         default: 'Center of Science and Technology Advanced Development',
    //     },
    //     description: desc,
    //     images: [
    //         {
    //             url: "/istad-thumbnail.jpg",
    //             width: 800,
    //             height: 600,
    //         },
    //     ]
    // },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MainLayout>
          <ProtectedRoute>
              {children}
          </ProtectedRoute>
        </MainLayout>
      </body>
    </html>
  )
}
