import React,{useState,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from "next/link";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
function NavbarCompHomePage(props) {
    const {bgColor, position, className,  } = props;
    const [theme, setTheme] = useState(props.theme ? props.theme : 'dark');
    const [textColor, setTextColor] = useState(props.textColor ? props.textColor : 'main')
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => {
      setIsHovered(!isHovered);
      if (theme === "dark" && props.theme==="light")
          setTheme("light");
      else
          setTheme("dark");
          
    if(textColor==='main' &&props.textColor === "gray-900")
              setTextColor('gray-900')
          else
              setTextColor('main')
     
  };
  
  return (<>
    <div className={`w-full relative z-40 hidden sm:grid lg:grid-cols-12 sm:grid-cols-7 ${className?className:''}`} >
       {(theme==='dark') && <a href={'/'} className="lg:col-span-3 sm:col-span-2 mx-auto"><Image alt="Image..." src={'https://d1efbx4910ct8i.cloudfront.net/Images2/logow.webp'} width={120} height={120}></Image></a>}
       {(theme==='light') && <a href={'/'} className="lg:col-span-3 sm:col-span-2 mx-auto"><Image alt="Image..." src={'https://d1efbx4910ct8i.cloudfront.net/Images2/logo.webp'} width={120} height={120}></Image></a>}
        <a href={'/'} className={`col-span-1 font-thin sm:col-start-3  lg:col-start-6 mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>Home</span></a>
        <Link href={'/aboutus'} className={`col-span-1 font-thin  mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor?textColor:'main'}   `}><span>About Us</span></Link>
        <div className={`col-span-1 font-thin cursor-pointer mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900  text-${textColor?textColor:'main'} group  `}  onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>Services
        <IoIosArrowDown className="ml-1 group-hover:rotate-180 transition-all transform duration-300"></IoIosArrowDown> 
        <div id="dropdownHover1" className="w-full h-fit -z-10 !absolute right-0 pt-72 pb-5 transition-all origin-top duration-300 transform scale-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 bg-gray-900 divide-y sm:px-10 lg:px-48 mx-auto shadow ">  
          <div className='w-full h-full grid grid-cols-3 border-t-2 border-gray-600 mt-5'>
            <ul className='list-disc text-start col-start-1 col-span-1'>
              <li>
                <Link href={'/digital-marketing-services'} className="block px-4 py-2 text-main cursor-pointer hover:underline hover:underline-offset-8
hover:decoration-action-900 ">Digital Marketing Services</Link>
                <ul className="list-decimal pl-6">
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
                <ul className="list-decimal pl-6">
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
      <Link href={'/contactus'} className={`col-span-1 font-thin mx-auto hover:underline hover:underline-offset-8 flex items-center  hover:decoration-action-900 text-${textColor ? textColor : 'main'}   `}> <span>Get a Quote now</span></Link>
      
    </div>
      
   
    </>
  )
}

export default NavbarCompHomePage