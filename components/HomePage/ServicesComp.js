import React from 'react'
import CardComp from '../CardComp'
import Pulse from 'react-reveal/Pulse';
import { Fade } from 'react-reveal';
function ServicesComp(props) {
    const { className, itemNumber } = props;
    const data = [[
        {
            title: 'Search Engine Optimization',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusamus hic tempore, maxime ad perspiciatis magni commodi perferendis omnis tenetur sequi ea iste. Enim, nostrum.',
            icon :''
        },
        {
            title: 'Social Media Marketing',
            description: 'Engage and grow your audience through social-media-marketing.',
        },
        {
            title: 'PPC Marketing',
            description: 'Drive traffic and sales through ppc-marketing.',
        },
        {
            title: 'Graphics Design',
            description: ' Enhance brand visuals with graphic-design.',
        },
    ], [
        {
            title: 'Custom Web Development',
            description: 'Tailored web solutions with custom-web-development.',
        }, {
            title: 'E-commerce Development',
            description: 'Build an online store with e-commerce-development.',
        },
        {
            title: 'Wordpress Development',
            description: 'Create a wordpress website with wordpress-development.',
        }
        ], [
        {
                title: 'CCTV Installation',
                description: 'Protect your business with cctv-installation.',
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
                                <svg className="w-5 h-5 text-footerColor lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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