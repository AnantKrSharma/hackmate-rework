import { Navbar } from '@/components/ui/navbar';
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <> 
      <Navbar showSignIn={false}/>
      <div className='mt-16'>
        {children}
      </div>
    </>
  )
}
