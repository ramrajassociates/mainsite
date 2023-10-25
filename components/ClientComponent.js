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
      {/* End Title */}
        {/* Grid */}
        <Carousel
            slideInterval={7000}
          className="w-[100vw] h-[30vh] [&>*]:rounded-none "
        >
     
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6"> */}
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp'} width={100} height={100}></Image>
        </div>
      
          {/* </div> */}
               
        </Carousel>
      {/* End Grid */}
    </div>
    {/* End Clients */}
  </div>
  
  );
};

export default ClientComponent;

