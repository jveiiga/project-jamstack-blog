import { Provider } from 'urql'
import { client, ssrCache } from '../lib/urql'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../../src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  
  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
