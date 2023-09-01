import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'Shadcn UI',
  description: 'This is source for use shadcn UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
