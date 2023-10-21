import React from 'react'
import Image from 'next/image';
function ContentComp1({ title, content, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 w-72">
    <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h2 className="text-2xl font-bold mt-4">{title}</h2>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
  )
}

export default ContentComp1