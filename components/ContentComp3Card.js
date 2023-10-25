import React from 'react'
import { TbZoomQuestion } from 'react-icons/tb';

function ContentComp3Card({item,key}) {
  return (
      <div className='flex flex-row rounded-lg border-b-2 border-action-900 shadow-lg shadow-action-300 p-4 py-9 items-center justify-center' key={key}>
          <div className='w-1/12'>
              <TbZoomQuestion size={50} className='text-action-900'></TbZoomQuestion>
          </div>
          <div className='w-11/12 flex flex-col'>
              <h1 className='font-semibold uppercase'>{item.question}</h1>
              <p>{item.answer }</p>
          </div>
    </div>
  )
}

export default ContentComp3Card