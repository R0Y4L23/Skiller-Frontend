import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return <><ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  /><Header/><Component {...pageProps} /><Footer/></>
}

export default MyApp
