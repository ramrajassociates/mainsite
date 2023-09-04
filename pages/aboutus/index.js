import AboutHeaderComp from '@/components/AboutusPage/AboutHeaderComp'
import TimeLine from '@/components/AboutusPage/TimeLine'
import NavbarComp from '@/components/NavbarComp'
import React from 'react'

function index() {
  return (
      <div className='overflow-x-hidden'>
          <NavbarComp  />
      <AboutHeaderComp />
      <TimeLine/>
    </div >
  )
}

export default index