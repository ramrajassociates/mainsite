import React from 'react'
import CallToActionComp from '../CallToActionComp'
import FooterComp from '../FooterComp'

function FooterCompWithCta() {
  return (
      <div className='snap-start snap-always'>
          <CallToActionComp />
          <FooterComp />
    </div>
  )
}

export default FooterCompWithCta