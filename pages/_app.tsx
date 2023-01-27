import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyApp from '../store/store'


export default function App({ Component, pageProps }: AppProps) {
  return <MyApp Component={Component} pageProps={pageProps} />
}
