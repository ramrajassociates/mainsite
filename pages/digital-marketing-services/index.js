import NavbarComp from '@/components/NavbarComp'
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-reveal'
function index() {
    return (<>
            <NavbarComp />
        <div className=''>
            <div className='object-contain h-[100vh] relative !snap-center '>
        <Image src={'/images/digi.jpg'} width={1920} height={1080} className='w-full h-full object-cover sm:object-top object-center  '></Image>
                <div className='bg-gray-600 sm:backdrop-blur rounded-lg absolute h-fit gap-4  sm:top-32 flex flex-col justify-center items-center sm:p-10 w-96 bg-opacity-20 sm:left-24 top-32 sm:max-w-[30vw] '>
                    <p className='text-main bg-footerColor px-2 py-1 absolute -top-2 -left-2'>Services</p>
                    <p className='text-main font-bold text-2xl pt-5'>Digital Marketing Service</p>
                    <div className='relative h-fit pl-5'>
<p className='text-xs text-main'>We offer a wide range of digital services in India including Social Media Marketing, Search Engine Optimization, Email Marketing, Graphic Design, Content Writing, Content Marketing, Website Design & Development, Application Development, Paid Marketing, Corporate Photoshoot and Others.</p>
                    <Fade bottom delay={1200} >
                    <span className="md:border-l-2 border-l border-action-900 h-full absolute left-2 top-0"></span>
                    </Fade>
                    </div>
      </div>
            </div>
            <div className='sm:px-24 px-1 !snap-center'>
                <h1 className='text-center text-2xl py-5'>Our Digital Marketing Services</h1>
                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
         
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Search Engine Optimization</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis sint accusantium, odit rerum similique consequatur natus, fugit non, velit mollitia temporibus necessitatibus excepturi..</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Social Media Optimization</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quia harum, neque obcaecati, repudiandae natus quaerat corrupti cupiditate minima saepe libero sapiente aperiam praesentium!</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Content Writing </h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, a voluptas! Pariatur cum explicabo laborum modi reiciendis ea placeat dignissimos dolore veniam. Sunt, nostrum?</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Web Development</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae nemo ducimus numquam beatae labore iure modi recusandae, hic ex accusantium! Exercitationem, ipsam corporis?</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Search Engine Marketing</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae nemo ducimus numquam beatae labore iure modi recusandae, hic ex accusantium! Exercitationem, ipsam corporis?</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Social Media Marketing</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae nemo ducimus numquam beatae labore iure modi recusandae, hic ex accusantium! Exercitationem, ipsam corporis?</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Photo & Videography</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae nemo ducimus numquam beatae labore iure modi recusandae, hic ex accusantium! Exercitationem, ipsam corporis?</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image class="h-40 rounded w-full object-cover object-center mb-6" src={'/images/2.jpg'} alt="content" width={520} height={500}></Image>
          
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Graphic Desing</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae nemo ducimus numquam beatae labore iure modi recusandae, hic ex accusantium! Exercitationem, ipsam corporis?</p>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
            </div>
            </>
  )
}

export default index