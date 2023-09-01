import NavbarComp from '@/components/NavbarComp'
import ContactHeaderComp from '@/components/contactusPage/ContactHeaderComp'
import React from 'react'

function index() {
  return (
      <div>
          <NavbarComp bgColor="black" position="sticky"/>
          <ContactHeaderComp/>
    </div>
  )
}

export default index