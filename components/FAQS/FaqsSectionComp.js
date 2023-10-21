import React from 'react'
import FaqsComp from './FaqsComp';


function FaqsSectionComp({ faqs,className }) {
    
    return (
        <div className={`flex lg:flex-row flex-col lg:min-h-[100vh] bg-gray-200 gap-5 items-start lg:pt-20 pt-5 overflow-y-scroll ${className}`}id='FaqsSection'>
        <div className="headingwithImage flex flex-col lg:w-1/2 justify-center items-start gap-5 p-4 ">
          <div className="heading ">
            <h2 className="text-4xl text-action-900 font-bold">(FAQs) Frequently Asked Questions ?</h2>
          </div>
          <div className="content text-gray-900">
          FAQs are a collection of questions and answers that are typically serve as a valuable resource for users, customers, or visitors to find answers to common inquiries without having to contact support or search extensively.
          </div>
        </div>
        <div className="lg:w-1/2 p-4 min-h-full w-full">
          {faqs && <FaqsComp faqs={faqs} Activeindex={0} />}
           
        </div>
      </div>
    )
}

export default FaqsSectionComp;