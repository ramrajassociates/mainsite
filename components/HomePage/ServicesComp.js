import React from 'react'
import CardComp from '../CardComp'
import { Fade } from 'react-reveal';
function ServicesComp(props) {
    const {className }= props;
  return (
      <div>
      <div className={` flex md:flex-row px-5 space-y-14 flex-col flex-wrap ${className}`} >
              <Fade bottom delay={200}> <CardComp title="Telecommunication Services" IconComponentNo='1'  className='w-full '/></Fade>
              <Fade bottom delay={300}> <CardComp title="Business Consultation" IconComponentNo='2'  className='w-full '/></Fade>
              <Fade bottom delay={400}> <CardComp title="Web & App Development" IconComponentNo='3' className='w-full ' /></Fade>
              <Fade bottom delay={500}> <CardComp title="IT Hardware Supply" IconComponentNo='4' className='w-full ' /></Fade>
              <Fade bottom delay={600}> <CardComp title="Digital Marketing Solution" IconComponentNo='5'  className='w-full '/></Fade>
            </div>
  </div>
  )
}

export default ServicesComp