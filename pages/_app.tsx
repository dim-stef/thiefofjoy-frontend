import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'react-redux'
import { LightMode } from '@chakra-ui/color-mode'
import {store} from '../src/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <LightMode>
          <Component {...pageProps} />
        </LightMode>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
