import React from 'react'
import { TbZoomQuestion } from 'react-icons/tb';

function ContentComp3Card({item}) {
  return (
      <div className='flex flex-row rounded-lg border-b-2 border-action-900'>
          <div className='w-1/12'>
              <TbZoomQuestion size={25} className='text-action-900'></TbZoomQuestion>
          </div>
          <div className='w-11/12 flex flex-col'>
              <h1 className='font-semibold uppercase'>{item.question}</h1>
              <p>{item.answer }</p>
          </div>
    </div>
  )
}

export default ContentComp3Card