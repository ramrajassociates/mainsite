import CallToActionComp from '@/components/CallToActionComp';
import FooterComp from '@/components/FooterComp';
import '@/styles/globals.css'
import 'flowbite';
import 'flowbite-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const NavbarComp = dynamic(
  () => import('@/components/NavbarComp'),
  { ssr: false, loading: () => 'Loading...' }
);
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <>
    {/* <NavbarComp/> */}
    <Component {...pageProps} />
    {router.pathname !== '/' && <CallToActionComp />}
      {router.pathname !== '/' && <FooterComp />}
    </>
}
