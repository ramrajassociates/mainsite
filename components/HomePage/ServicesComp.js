import React from 'react'
import CardComp from '../CardComp'
import { Fade } from 'react-reveal';
function ServicesComp(props) {
    const {className }= props;
  return (
      <div>
      <div className={` flex flex-row flex-wrap ${className}`} >
              <Fade bottom delay={200}> <CardComp title="Telecommunication Services" IconComponentNo='1' /></Fade>
              <Fade bottom delay={300}> <CardComp title="Business Consultation" IconComponentNo='2' /></Fade>
              <Fade bottom delay={400}> <CardComp title="Web & App Development" IconComponentNo='3' /></Fade>
              <Fade bottom delay={500}> <CardComp title="IT Hardware Supply" IconComponentNo='4' /></Fade>
              <Fade bottom delay={600}> <CardComp title="Digital Marketing Solution" IconComponentNo='5' /></Fade>
            </div>
  </div>
  )
}

export default ServicesComp