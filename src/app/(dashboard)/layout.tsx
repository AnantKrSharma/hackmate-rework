import { Navbar } from '@/components/ui/navbar';
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar/>
      <div className="mt-16 px-4"> 
        {children}
      </div>
    </>
  )
}
