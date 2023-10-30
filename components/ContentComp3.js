import React from 'react'
import ContentComp3Card from './ContentComp3Card'
function ContentComp3({content}) {
  return (
      <div className='flex flex-col space-y-3 px-10 py-5 '>
          {content.map((item, keyval) => {
              return (
                  <ContentComp3Card item={item} key={keyval}/>
             )
          }
          )}
      </div>
  )
}

export default ContentComp3