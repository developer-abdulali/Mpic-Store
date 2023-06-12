import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <AppLayout>
       <Component {...pageProps} />
    </AppLayout>
  )
}
