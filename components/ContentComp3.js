import React from 'react'

function ContentComp3({content}) {
  return (
      <div className='flex flex-col space-y-3'>
          {content.map((item, index) => {
              return (<>
                  <ContentComp3Card item={item} key={index} />
              </>)
          }
          )}
      </div>
  )
}

export default ContentComp3