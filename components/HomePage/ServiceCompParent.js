import React,{useState} from 'react'
import ServicesComp from './ServicesComp'

function ServiceCompParent() {
    const [itemNumber, setItemNumber] = useState(0)
    const [showMobileMenu, setShowMobileMenu] = useState(0)
  return (
      <div className="mx-auto lg:min-h-[100vh]  overflow-x-hidden lg:px-36 px-10 py-10 ">
          {/* <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> */}
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-gray-500 sm:text-md dark:text-gray-400">Discover a diverse range of services tailored to meet your business needs. From marketing prowess to legal expertise, we provide comprehensive solutions to drive your success.</p>
      </div>
          <div className='flex flex-row gap-4 '>
              <div className='flex flex-col lg:w-1/3 w-full gap-2'>
                  <div className={`menuItems select-none cursor-pointer flex justify-between ${(itemNumber===0)?('bg-footerColor text-main'):(' text-active bg-white')} p-5 hover:bg-footerColor hover:text-main`} onClick={()=>{setItemNumber(0)}}>
                      Digital Marketing Services
                      <span onClick={() => setShowMobileMenu(prevState => (prevState === 0 ? 1 : 0))} className='cursor-pointer lg:hidden block select-none'>
                         { (showMobileMenu === 1) ? '-' : '+'}
                      </span>
                  </div>
                  <div className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${(showMobileMenu === 1) ? 'max-h-full py-10 px-2' : 'max-h-0'}`}>
                  {showMobileMenu!=0 && <ServicesComp itemNumber={showMobileMenu-1} />}
                  </div>
                  <div className={`menuItems select-none cursor-pointer flex justify-between ${(itemNumber===1)?('bg-footerColor text-main'):(' text-active bg-white')} p-5 hover:bg-footerColor hover:text-main`} onClick={()=>{setItemNumber(1)}}>
                      Web development
                      <span onClick={() => setShowMobileMenu(prevState => (prevState === 0 ? 2 : 0))} className='cursor-pointer lg:hidden block select-none'>
                      { (showMobileMenu === 2) ? '-' : '+'}
                      </span>
                  </div>
                  <div className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${(showMobileMenu === 2) ? 'max-h-full py-10 px-2' : 'max-h-0'}`}>
                  {showMobileMenu!=0 && <ServicesComp itemNumber={showMobileMenu-1} />}
                  </div>
                  <div className={`menuItems select-none cursor-pointer flex justify-between  ${(itemNumber===2)?('bg-footerColor text-main'):(' text-active bg-white')} p-5 hover:bg-footerColor hover:text-main`} onClick={()=>{setItemNumber(2)}}>
                      Surveillance services
                      <span onClick={() => setShowMobileMenu(prevState => (prevState === 0 ? 3 : 0))} className='cursor-pointer lg:hidden block select-none'>
                      { (showMobileMenu === 3) ? '-' : '+'}
                      </span>
                  </div>
                  <div className={`itemMenu1 sele lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${(showMobileMenu === 3) ? 'max-h-full py-10 px-2' : 'max-h-0'}`}>
                    {showMobileMenu!=0 && <ServicesComp itemNumber={showMobileMenu-1}  />}
                    </div>
                  
        </div>
              <div className='w-2/3 text-center lg:block hidden'>
                  <ServicesComp itemNumber={itemNumber} />
        </div>
      </div>
      </div>
  )
}

export default ServiceCompParent