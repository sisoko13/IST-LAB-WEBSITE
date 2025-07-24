import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import './globals.css'
import Footer from '@/components/footer'

const Navigation = dynamic(() => import('@/components/navigation-client'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'IST Lab - Information Science & Technology Laboratory',
  description: 'Kunsan National University IST Lab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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