import React from 'react'
import CardComp from '../CardComp'
import Pulse from 'react-reveal/Pulse';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
function ServicesComp(props) {
    const { className, itemNumber } = props;
    const data = [[
        {
            title: 'Search Engine Optimization',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus hic tempore, maxime ad perspiciatis magni commodi perferendis omnis tenetur sequi ea iste. Enim, nostrum.',
            url:'/digital-marketing-services/seo'
        },
        {
            title: 'Social Media Marketing',
            description: 'Engage and grow your audience through social-media-marketing.',
            url:'/digital-marketing-services/social-media-marketing'
        },
        {
            title: 'PPC Marketing',
            description: 'Drive traffic and sales through ppc-marketing.',
            url:'/digital-marketing-services/ppc-marketing'
        },
        {
            title: 'Graphics Design',
            description: ' Enhance brand visuals with graphic-design.',
            url:'/digital-marketing-services/graphic-design'

        },
    ], [
        {
            title: 'Custom Web Development',
            description: 'Tailored web solutions with custom-web-development.',
            url:'/web-design-and-development/custom-web-development'
        }, {
            title: 'E-commerce Development',
            description: 'Build an online store with e-commerce-development.',
            url:'/web-design-and-development/e-commerce-website-development'
        },
        {
            title: 'Wordpress Development',
            description: 'Create a wordpress website with wordpress-development.',
            url:'/web-design-and-development/wordpress-development'
        }
        ], [
        {
                title: 'CCTV Installation',
                description: 'Protect your business with cctv-installation.',
                url:'/surveillance-services'
        }
    ]]
  return (
      <div>

  
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              {
                  data[itemNumber].map((item, index) => {
                      return (
                        <Pulse key={index} spy={itemNumber+1} appear={true} >
                          
                        <div className='bg-gray-200 px-3 py-7 shadow-lg relative '>
                                  <div className="flex justify-center items-center mb-4 w-10 h-10 absolute -top-5  rounded-full bg-gray-200 lg:h-12 lg:w-12 dark:bg-primary-900">
                                      <Link href={item.url}>
                                      
                            <LiaExternalLinkAltSolid className='text-footerColor' size={25} />
                                      </Link>
                            </div>
                                  <h3 className="mb-2  text-main bg-footerColor px-2 py-1 absolute -top-2 -right-2">{item.title}</h3>
                                            <div className="w-full h-full relative overflow-hidden">
                                                
                                            <p className="text-gray-600 dark:text-gray-400 pl-5">{item.description}</p>
                                            <Fade bottom delay={1200} >
                                  <span className="md:border-l-2 border-l border-action-900 h-full  absolute left-2 top-0 "></span>
                                  </Fade>
                                            </div>
                        </div>
                          </Pulse>
                      )
                    })
              }

      </div>
  </div>
  )
}

export default ServicesComp