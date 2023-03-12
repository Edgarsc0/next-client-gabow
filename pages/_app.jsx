import '../styles/globals.scss'
import Menu from '../components/Menu'
// import Animacion from '../components/Animacion'
// import Footer from '../components/Footer'
import {Analytics} from "@vercel/analytics/react"
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component,pageProps,session }) {
    return (
      <SessionProvider session={session}>
        <>
          <Menu/>
          <Component {...pageProps} />
          <Analytics/>
        </>
      </SessionProvider>
    )
}

export default MyApp
