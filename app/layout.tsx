import type { Metadata } from 'next'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import Footer from '@/components/footer'

const Navigation = dynamic(() => import('@/components/navigation'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'IST Lab - Information Science & Technology Laboratory',
  description: 'Kunsan National University IST Lab',
}

declare global {
  interface Window {
    naver: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID || 'demo'}`}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
