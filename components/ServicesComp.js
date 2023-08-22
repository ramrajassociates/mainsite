import React from 'react'
import CardComp from './CardComp'
function ServicesComp(props) {
    const {className }= props;
  return (
      <div>
          <div className={` flex flex-row flex-wrap ${className}`} >
              <CardComp title="Telecommunication Services" IconComponentNo='1' />
              <CardComp title="Business Consultation" IconComponentNo='2' />
              <CardComp title="Web & App Development" IconComponentNo='3' />
              <CardComp title="IT Hardware Supply" IconComponentNo='4' />
              <CardComp title="Digital Marketing Solution" IconComponentNo='5' />
            </div>
  </div>
  )
}

export default ServicesComp