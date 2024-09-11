import React from 'react'

const AboutDeveloper = ({type,value="",developer}) => {
  return (
    <div className='px-4 py-8 md:px-12 lg:px-24'>
        <h2 className="text-3xl font-semibold mb-6">About Developer - {developer}</h2>
        {type=="string"?value:<div dangerouslySetInnerHTML={{ __html: value }} /> }
    </div>
  )
}

export default AboutDeveloper