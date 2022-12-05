import '../styles/globals.scss'
import Menu from '../components/Menu'
import Animacion from '../components/Animacion'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  if (Component.name === 'index') {
    return <>
      <Component {...pageProps} />
    </>
  } else {
    return <>
      <Menu />
      <Animacion />
      <Component {...pageProps} />
      <Footer />
    </>
  }
}

export default MyApp
