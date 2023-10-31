import React,{useState,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from "next/link";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
function NavbarComp(props) {
  const {textColor,bgColor,position,className} = props;
  const [CloseMenu, setCloseMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  return (<>
    <div className={`w-full ${(isSticky || position)?'sticky bg-gray-700 backdrop-blur bg-opacity-75 [&>*]:text-main':'absolute'} top-0 z-[50]  ${className?className:'hidden sm:grid lg:grid-cols-12 sm:grid-cols-7'}  transition-all duration-500 ease-in-out`} >
        <a href={'/'} className="lg:col-span-3 sm:col-span-2 mx-auto"><Image alt="Image..." src={'https://d1efbx4910ct8i.cloudfront.net/Images2/logow.webp'} width={120} height={120}></Image></a>
        <a href={'/'} className={`col-span-1 font-thin sm:col-start-3  lg:col-start-7 mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></a>
        <Link href={'/aboutus'} className={`col-span-1 font-thin  mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <div className={`col-span-1 font-thin cursor-pointer mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'} group  `} >Services
        <IoIosArrowDown className="ml-1 group-hover:rotate-180 transition-all transform duration-300"></IoIosArrowDown> 
        <div id="dropdownHover1" className="w-full h-fit -z-10 !absolute right-0 pt-72 pb-5 transition-all origin-top duration-300 transform scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 bg-gray-900 divide-y sm:px-10 lg:px-48 mx-auto shadow ">  
          <div className='w-full h-full grid grid-cols-3 border-t-2 border-gray-600 mt-5'>
            <ul className='list-disc text-start col-start-1 col-span-1'>
              <li>
                <Link href={'/digital-marketing-services'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900 ">Digital Marketing Services</Link>
                <ul className="list-disc pl-6">
                  <li>  <Link href={'/digital-marketing-services/seo'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Search Engine Optimization</Link></li>
                  <li>  <Link href={'/digital-marketing-services/graphic-design'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Graphics Design</Link></li>
                  <li>  <Link href={'/digital-marketing-services/ppc-marketing'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">PPC marketing</Link></li>
                  <li>  <Link href={'/digital-marketing-services/social-media-marketing'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Social media marketing</Link></li>
                </ul>
              </li>
            </ul>
            <ul className='list-disc text-start col-start-2 col-span-1'>
              <li>
                <Link href={'/web-design-and-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Web design and development</Link>
                <ul className="list-disc pl-6">
                  <li>  <Link href={'/web-design-and-development/custom-web-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Custom web development</Link></li>
                  <li>  <Link href={'/web-design-and-development/e-commerce-website-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">E-commerce Development</Link></li>
                  <li>  <Link href={'/web-design-and-development/wordpress-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Wordpress Development</Link></li>
                </ul>
              </li>
            </ul>
            <ul className='list-disc text-start col-start-3 col-span-1'>
              <li>
                <Link href={'/surveillance-services'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Servilance services </Link>
              </li>
            </ul>
           
          
       </div>
        
        
</div>
        </div>
        <Link href={'/contactus'} className={`col-span-1 font-thin mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
      {/* <Link href={'/contactus'} className={`col-span-1 font-thin mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor ? textColor : 'main'}   `}> <span>Get a Quote now</span></Link> */}
      
    </div>
    {/* Mobile Menu */}
    <div className={`h-[7vh] grid sm:hidden grid-cols-12 w-full ${(isSticky || position)?'fixed bg-gray-700 backdrop-blur bg-opacity-75 [&>*]:text-main':'absolute'} top-0 z-[100]  `} >
        <a href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'https://d1efbx4910ct8i.cloudfront.net/Images2/logow.webp'} width={120} height={120}></Image></a>
      
      <div className=' col-span-2 col-start-11'>
     <FiMenu className={`text-white absolute top-4 right-4  `} size={25} onClick={()=>setCloseMenu(e=>!e)} ></FiMenu>
        
       </div>
      <div className={`  ${!CloseMenu ? 'translate-x-[32rem]' : 'translate-x-0'} transition-all duration-700  flex flex-col fixed right-0 space-y-5 h-[100vh] overflow-y-auto w-[70vw] top-0 justify-start items-start [&>*]: pl-5 [&>*]:!text-lg  p-1 bg-black `} id='MobileMenu'>
      <IoCloseOutline className='text-white absolute top-4 right-4 z-10' size={25} onClick={()=>setCloseMenu(e=>!e)} ></IoCloseOutline>
      <a href={'/'} className={` border-b border-action-900 w-full  pb-4  font-thin text-center !mt-36 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></a>
        <Link href={'/aboutus'} className={` border-b border-action-900 w-full  pb-4  font-thin  text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <div className={`  border-b border-action-900 w-full  pb-4 font-thin cursor-pointer text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'} group  `} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={()=>setOpen(e=>!e)}>Services
          <IoIosArrowDown className={`ml-1 ${open?'rotate-180':'rotate-0'} transition-all transform duration-300`}></IoIosArrowDown>
        </div>
    <ul className={`py-2 text-sm text-main ${open?'block':'hidden'} transition-all duration-500`}  >
      <li>
            <Link href={'/digital-marketing-services'} className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Digital Marketing Services</Link>
            <ul className=" pl-6 [&>*]:text-xs">
                  <li>  <Link href={'/digital-marketing-services/seo'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Search Engine Optimization</Link></li>
                  <li>  <Link href={'/digital-marketing-services/graphic-design'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Graphics Design</Link></li>
                  <li>  <Link href={'/digital-marketing-services/ppc-marketing'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">PPC marketing</Link></li>
                  <li>  <Link href={'/digital-marketing-services/social-media-marketing'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Social media marketing</Link></li>
                </ul>
            <Link href={'/web-design-and-development'} className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Web design and development</Link>
            <ul className="list-disc pl-6 [&>*]:text-xs">
                  <li>  <Link href={'/web-design-and-development/custom-web-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Custom web development</Link></li>
                  <li>  <Link href={'/web-design-and-development/e-commerce-website-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">E-commerce Development</Link></li>
                  <li>  <Link href={'/web-design-and-development/wordpress-development'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Wordpress Development</Link></li>
                </ul>
        <Link href={'/surveillance-services'} className="block px-4 py-2  text-sm cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900">Surveillance services</Link>
      </li>
     
     
    </ul>
        <Link href={'/contactus'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
        {/* <Link href={'/contactus'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}> <span>Get a Quote now</span></Link> */}
      </div>
    </div>
    </>
  )
}

export default NavbarComp