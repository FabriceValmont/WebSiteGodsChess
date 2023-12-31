import './globals.css'
import { Inter } from 'next/font/google'
import { Black_Ops_One} from "@next/font/google"
import Header from './Components/Header'
import Footer from './Components/Footer'
import { SessionProvider } from './CustomHooks/SessionContext'

const BOO = Black_Ops_One({
  subsets: ['latin'],
  weight: ['400']

})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={BOO.className}> {/*className={inter.className} */}
      <SessionProvider>
        <Header />
        {children}
        <Footer />
      </SessionProvider>
      </body>
    </html>
  )
}
