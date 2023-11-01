import React from 'react'
import Image from 'next/image'
function ContentComp2({content}) {
  return (
      <>
      <div className='bg-action-900 p-10 py-12 space-y-4'>
              <h1 className='text-3xl text-center text-main '>What is <span className=' font-semibold '>{content.serviceName}?</span></h1>
              <p className='text-main'>{content.explanation }</p>
          </div>
          <div className='flex lg:flex-row flex-col bg-gray-900 lg:space-x-5 space-y-5 relative py-14 p-10 items-center'>
              <div className='lg:w-2/3 w-full [&>*]:text-main flex flex-col justify-start space-y-4'>
                  <h2 className='text-4xl font-semibold'>A <span className='text-action-900'>{content.serviceName}</span> that Delivers </h2>
                  <p>{content.description }</p>
                  <p className='font-light text-sm'>
                  Digital marketing spans many disciplines from your website to SEO and paid search, from eMarketing through to social and paid media. As an Integrated B2B Agency, we have built expertise in each of these areas. And more importantly, we know how to blend all the aspects of digital marketing to take a 360-degree marketing approach that drives results.
                  </p>
              </div>
              <div className='lg:w-2/3 w-full relative flex justify-center '>
                  <div className="sm:w-96 sm:h-96 w-48 h-48 bg-transparent border border-white rounded-full z-10 absolute sm:top-10 sm:right-32 right-5"></div>
                  <div className="sm:w-96 sm:h-96 w-48 h-48 bg-gray-700 rounded-full"></div>
                  <div className='sm:w-96 sm:h-96 w-48 h-48 z-[5] absolute top-10 left-20 rounded-full'>
                  <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp'} width={500} height={500} className='w-full h-full object-cover sm:object-top object-center rounded-full  '></Image>
                    </div>
              </div>
          </div>
      </>
  )
}

export default ContentComp2