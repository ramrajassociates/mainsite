import Image from "next/image";
import React from "react";
import { Carousel } from 'flowbite-react';
const ClientComponent = () => {
    
      
      
  return (
    <div className="bg-gray-900 flex items-center  justify-center pt-10 overflow-x-hidden">
    {/* Clients */}
    <div className="w-full py-10  lg:py-14 ">
      {/* Title */}
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-200">
          Trusted by enterprise like -
        </h2>
      </div>
  {/* lg screens */}
        <Carousel
            slideInterval={1500}
          className="w-[100vw] h-[30vh] [&>*]:rounded-none hidden lg:block "
        >
     
        <div className="p-4 md:p-7 flex justify-center gap-32 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp'} width={100} height={100}></Image>
        </div>
        
        <div className="p-4 md:p-7 flex justify-center gap-32 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp'} width={100} height={100} className="bg-white p-1 rounded-lg"></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp'} width={100} height={100}></Image>
        </div>
     
      
               
        </Carousel>
   {/* lg screens */}
  {/* sm screens */}
        <Carousel
            slideInterval={1500}
          className="w-[100vw] h-[30vh] [&>*]:rounded-none hidden sm:block lg:hidden "
        >
     
        <div className="p-4 md:p-7 flex justify-center gap-32 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp'} width={100} height={100}></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-32 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp'} width={100} height={100} className="bg-white p-1 rounded-lg"></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-32 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp'} width={100} height={100}></Image>
        </div>
     
      
               
        </Carousel>
   {/* sm screens */}
  {/* sm screens */}
        <Carousel
            slideInterval={1500}
          className="w-[100vw] h-[30vh] [&>*]:rounded-none block sm:hidden "
        >
     
        <div className="p-4 md:p-7 flex justify-center gap-10 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp'} width={100} height={100}></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-10 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-10 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp'} width={100} height={100}></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-10 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp'} width={100} height={100} className="bg-white p-1 rounded-lg"></Image>
            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp'} width={100} height={100}></Image>
          </div>
          <div className="p-4 md:p-7 flex justify-center gap-10 ">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp'} width={100} height={100}></Image>
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp'} width={100} height={100}></Image>
        </div>
     
      
               
        </Carousel>
   {/* sm screens */}
    </div>
    {/* End Clients */}
  </div>
  
  );
};

export default ClientComponent;

