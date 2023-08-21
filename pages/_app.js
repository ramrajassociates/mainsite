import NavbarComp from '@/components/NavbarComp';
import '@/styles/globals.css'
import 'flowbite';
import 'flowbite-react';
export default function App({ Component, pageProps }) {
  return <>
    <NavbarComp/>
    <Component {...pageProps} />
    </>
}
