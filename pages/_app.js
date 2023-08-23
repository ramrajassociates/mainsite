import FooterComp from '@/components/FooterComp';
import '@/styles/globals.css'
import 'flowbite';
import 'flowbite-react';
import dynamic from 'next/dynamic';
const NavbarComp = dynamic(
  () => import('@/components/NavbarComp'),
  { ssr: false, loading: () => 'Loading...' }
);
export default function App({ Component, pageProps }) {
  return <>
    {/* <NavbarComp/> */}
    <Component {...pageProps} />
    <FooterComp/>
    </>
}
