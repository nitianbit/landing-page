import React from 'react'

const AboutProject = ({type,value="",title=""}) => {
  return (
    <div className='px-4 py-8 md:px-12 lg:px-24 border-b'>
        <h2 className="text-3xl font-semibold mb-6">About Project - {title}</h2>
        {type=="string"?value:<div dangerouslySetInnerHTML={{ __html: value }} /> }
    </div>
  )
}

export default AboutProject