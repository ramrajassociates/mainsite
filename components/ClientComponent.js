import Image from "next/image";
import React from "react";

const ClientComponent = () => {
    
      
      
  return (
    <div className="bg-white lg:min-h-screen flex items-center justify-center ">
    {/* Clients */}
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ">
      {/* Title */}
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
          Trusted by enterprise like -
        </h2>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/1.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/2.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/3.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/4.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/5.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/6.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/7.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/8.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/9.webp'} width={100} height={100}></Image>
        </div>
        <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 flex justify-center">
       <Image src={'https://d1efbx4910ct8i.cloudfront.net/Customer/10.webp'} width={100} height={100}></Image>
        </div>
      
      </div>
      {/* End Grid */}
    </div>
    {/* End Clients */}
  </div>
  
  );
};

export default ClientComponent;

