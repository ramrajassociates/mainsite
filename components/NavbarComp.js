import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from "next/link";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
function NavbarComp(props) {
  const {textColor,bgColor,position,className} = props;
  const [CloseMenu, setCloseMenu] = useState(false);
  const [open, setOpen] = useState(false);
  
  
  return (<>
    <div className={`md:h-[10vh] w-full hidden sm:grid grid-cols-12 ${position?position:'absolute'} top-0 z-10 bg-${bgColor?bgColor:'transparent'} ${className}`} >
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/Images/logow.png'} width={120} height={120}></Image></Link>
        <Link href={'/'} className={`col-span-1 font-thin  col-start-6 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></Link>
        <Link href={'/aboutus'} className={`col-span-1 font-thin  text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <div className={`col-span-1 font-thin cursor-pointer text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'} group  `} >Services
        <IoIosArrowDown className="ml-1"></IoIosArrowDown> 
        <div id="dropdownHover" className="md:w-[30vw] z-10 !absolute !top-20 !left-1/2 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
      <li>
        <Link href={'/digital-marketing-services'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital Marketing Services</Link>
      </li>
     
     
    </ul>
</div>
        </div>
        <Link href={'/contactus'} className={`col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
      <Link href={'/contactus'} className={`col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor ? textColor : 'main'}   `}> <span>Get a Quote now</span></Link>
      
    </div>
    {/* Mobile Menu */}
    <div className={`h-[10vh] grid sm:hidden grid-cols-12 w-full absolute top-0 z-10 bg-${bgColor?bgColor:'transparent'} `} >
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/Images/logow.png'} width={120} height={120}></Image></Link>
      
      <div className=' col-span-2 col-start-11'>
     <FiMenu className={`text-white absolute top-4 right-4  `} size={25} onClick={()=>setCloseMenu(e=>!e)} ></FiMenu>
        
       </div>
      <div className={`  ${!CloseMenu ? 'translate-x-96' : 'translate-x-0'} transition-all duration-700  flex flex-col fixed right-0 space-y-5 h-[100vh] w-[50vw] top-0 justify-start items-start [&>*]: pl-5 [&>*]:!text-lg  p-1 bg-black `}>
      <IoCloseOutline className='text-white absolute top-4 right-4 z-10' size={25} onClick={()=>setCloseMenu(e=>!e)} ></IoCloseOutline>
      <Link href={'/'} className={` border-b border-action-900 w-full  pb-4  font-thin text-center !mt-36 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></Link>
        <Link href={'/aboutus'} className={` border-b border-action-900 w-full  pb-4  font-thin  text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <div className={`  border-b border-action-900 w-full  pb-4 font-thin cursor-pointer text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={()=>setOpen(e=>!e)}>Services
          <IoIosArrowDown className="ml-1"></IoIosArrowDown>
        </div>
    <ul className={`py-2 text-sm text-main ${open?'block':'hidden'} transition-all duration-500`}  >
      <li>
        <Link href={'/digital-marketing-services'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital Marketing Services</Link>
      </li>
     
     
    </ul>
        <Link href={'/contactus'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
        <Link href={'/contactus'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}> <span>Get a Quote now</span></Link>
      </div>
    </div>
    </>
  )
}

export default NavbarComp