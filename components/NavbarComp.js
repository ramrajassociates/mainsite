import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from "next/link";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
function NavbarComp(props) {
  const {textColor,bgColor} = props;
  const [CloseMenu, setCloseMenu] = useState(false);
  
  return (<>
    <div className={`md:h-[10vh]  hidden sm:grid grid-cols-12 absolute top-0 z-10 bg-${bgColor?bgColor:'transparent'} `} >
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/images/logo.png'} width={120} height={120}></Image></Link>
        <Link href={'/'} className={`col-span-1 font-thin  col-start-6 text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></Link>
        <Link href={'/aboutus'} className={`col-span-1 font-thin  text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <span className={`col-span-1 font-thin cursor-pointer text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">Services
        <IoIosArrowDown className="ml-1"></IoIosArrowDown>
        </span>
        <Link href={'/contactus'} className={`col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
        <Link href={'/contact'} className={`col-span-1 font-thin text-center hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}> <span>Get a Quote now</span></Link>
    </div>
    {/* Mobile Menu */}
    <div className={`md:h-[10vh] grid sm:hidden grid-cols-12 absolute top-0 z-10 bg-${bgColor?bgColor:'transparent'} `} >
        <Link href={'/'} className="col-span-3 mx-auto"><Image alt="Image..." src={'/images/logo.png'} width={120} height={120}></Image></Link>
      
      <div className=' col-span-2 col-start-11'>
      {CloseMenu ?<IoCloseOutline className='text-action-900 absolute top-4 right-4 z-10' size={25} onClick={()=>setCloseMenu(e=>!e)} ></IoCloseOutline>:<FiMenu className={`text-action-900 absolute top-4 right-4 z-10 `} size={25} onClick={()=>setCloseMenu(e=>!e)} ></FiMenu>}
        
       </div>
      <div className={`  ${!CloseMenu?'translate-x-96':'translate-x-0'} transition-all duration-700  flex flex-col fixed right-0 space-y-5 h-[100vh] w-[50vw] top-0 justify-start items-start [&>*]: pl-5 [&>*]:!text-lg  p-1 bg-black `}>
      <Link href={'/'} className={` border-b border-action-900 w-full  pb-4  font-thin text-center !mt-36 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></Link>
        <Link href={'/aboutus'} className={` border-b border-action-900 w-full  pb-4  font-thin  text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <span className={`  border-b border-action-900 w-full  pb-4 font-thin cursor-pointer text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover">Services
        <IoIosArrowDown className="ml-1"></IoIosArrowDown>
        </span>
        <Link href={'/contactus'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'}  `}> <span>Contact Us</span></Link>
        <Link href={'/contact'} className={` border-b border-action-900 w-full  pb-4 font-thin text-center flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}> <span>Get a Quote now</span></Link>
      </div>
    </div>
    </>
  )
}

export default NavbarComp