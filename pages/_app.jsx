import '../styles/globals.scss'
import Menu from '../components/Menu'
// import Animacion from '../components/Animacion'
// import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Analytics />

    </>
  )
}

export default MyApp
