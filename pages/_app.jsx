import '../styles/globals.scss'
// import Menu from '../components/Menu'
// import Animacion from '../components/Animacion'
// import Footer from '../components/Footer'


function App({ Component, pageProps }) {
  return (
    <>
      {/* <Menu /> */}
      <Component {...pageProps} />

    </>
  )
}

export default App
