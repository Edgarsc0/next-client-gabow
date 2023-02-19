import '../styles/globals.scss'
import Menu from '../components/Menu'
import Animacion from '../components/Animacion'
import Footer from '../components/Footer'
import {Analytics} from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  if (Component.name == 'index') {
    console.log(Component);
    return (<>
      <Component {...pageProps} />
      <Analytics/>
    </>)
  } else {
    return (<>
      <Menu />
      <Animacion />
      <Component {...pageProps} />
      <Analytics/>
      <Footer />
    </>)
  }
}

export default MyApp
