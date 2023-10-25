import React from 'react'
import { Tabs } from "flowbite-react";
import Image from 'next/image'
function ContentComp4() {
    return (
        <div className='py-20'>
            <div className='space-y-5 pb-4'>
                <h2 className='text-2xl font-semibold text-action-900 text-center'>How we works ?</h2>
                <h1  className='text-3xl font-bold text-action-900 text-center'>Digital Marketing Best Practices</h1>
            </div>
            <div className="mx-auto w-10/12 flex flex-row justify-center my-5 px-10">
                
      <Tabs.Group aria-label="Tabs with icons" style="underline">
              
    
        <Tabs.Item title="DEVELOP A STRATEGY" active={true} className='min-w-1/3 '  >
                        <div className='flex flex-row space-x-5'>
                            <div className='Image w-1/3 object-cover '>
                            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                            </div>
                            <div className='Content w-2/3'>
                                <h1 className='text-2xl font-semibold text-action-900'>Utilize Actionable Insights</h1>
                                <p>
                                    Digital marketing is a dynamic and multifaceted field that encompasses a wide range of online strategies and techniques aimed at promoting products, services, or brands. In today's interconnected world, digital marketing has become an essential component of any business's growth strategy. It leverages the power of the internet and various digital channels to reach and engage with a global audience.
                                <br />
                                    From search engine optimization (SEO) and social media marketing to pay-per-click (PPC) advertising and content creation, digital marketing offers a diverse toolkit to help businesses increase their online presence, connect with their target customers, and drive conversions.


                      
                                </p>
                            </div>
           </div>
        </Tabs.Item>
                    <Tabs.Item title="FORGET VANITY METRICS" className='min-w-1/3'  >
                    <div className='flex flex-row space-x-5'>
                            <div className='Image w-1/3 object-cover '>
                            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                            </div>
                            <div className='Content w-2/3'>
                                <h1 className='text-2xl font-semibold text-action-900'>Utilize Actionable Insights</h1>
                                <p>
                                    Digital marketing is a dynamic and multifaceted field that encompasses a wide range of online strategies and techniques aimed at promoting products, services, or brands. In today's interconnected world, digital marketing has become an essential component of any business's growth strategy. It leverages the power of the internet and various digital channels to reach and engage with a global audience.
                                <br />
                                    From search engine optimization (SEO) and social media marketing to pay-per-click (PPC) advertising and content creation, digital marketing offers a diverse toolkit to help businesses increase their online presence, connect with their target customers, and drive conversions.


                      
                                </p>
                            </div>
           </div>
        </Tabs.Item>
                    <Tabs.Item title="CREATE A SEAMLESS JOURNEY" className='min-w-1/3'  >
                    <div className='flex flex-row space-x-5'>
                            <div className='Image w-1/3 object-cover '>
                            <Image src={'https://d1efbx4910ct8i.cloudfront.net/Images2/search-engine-optimization.webp'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                            </div>
                            <div className='Content w-2/3'>
                                <h1 className='text-2xl font-semibold text-action-900'>Utilize Actionable Insights</h1>
                                <p>
                                    Digital marketing is a dynamic and multifaceted field that encompasses a wide range of online strategies and techniques aimed at promoting products, services, or brands. In today's interconnected world, digital marketing has become an essential component of any business's growth strategy. It leverages the power of the internet and various digital channels to reach and engage with a global audience.
                                <br />
                                    From search engine optimization (SEO) and social media marketing to pay-per-click (PPC) advertising and content creation, digital marketing offers a diverse toolkit to help businesses increase their online presence, connect with their target customers, and drive conversions.


                      
                                </p>
                            </div>
           </div>
        </Tabs.Item>
        
      </Tabs.Group>
            </div>
            </div>
  );
}

export default ContentComp4