import React,{useState,useEffect} from 'react'
import CallToActionComp from '../CallToActionComp'
import FooterComp from '../FooterComp'
import NavbarCompHomePage from './NavBarCompHomePage'
import { Slide } from "react-reveal";
function FooterCompWithCta({ FooterCompWithCtaRef, height }) {
  const [animate, setanimate] = useState(false)
  useEffect(() => {
      if (height <=10 && height >=-50) {
          setanimate(true);
      } else {
          setanimate(false);
    }
  }, [height])
  return (
    <div className='relative snap-start snap-always' ref={FooterCompWithCtaRef}>
      <div className='min-h-[110px] NavbarComp lg:block hidden absolute top-0 z-[30] w-full'>
            {animate && <Slide top spy={animate} appear duration={700}>
              <NavbarCompHomePage theme='dark' textColor='main' />
          </Slide>}
               </div>
          <CallToActionComp />
          <FooterComp />
    </div>
  )
}

export default FooterCompWithCta