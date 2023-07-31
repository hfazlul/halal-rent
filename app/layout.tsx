import './globals.css'
import { Nunito } from 'next/font/google'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurentUser'
import RentModal from './components/modals/RentModal'


const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  charset: 'UTF-8',
  title: 'halal rent app',
  description: 'bangladesh app',
  name: 'viewport',
  content: 'width=device-width,initial-scale=1.0',
  
}

export default async function RootLayout({children,}:{children: React.ReactNode}) {
  
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      
        <body className={font.className}>
            <div className="m-5 bg-slate-50 border-red-50  border-2 rounded-md">
                <ClientOnly>
                  <ToasterProvider/>
                  <RentModal/>
                  <LoginModal/>
                  <RegisterModal/>
                  <Nav currentUser={currentUser}/>
                </ClientOnly>

                
                  <div className='pb-20 pt-10'>
                     {children}
                  </div>
              </div>
        </body>

    </html>
  )
}
