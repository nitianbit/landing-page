import React from 'react'
import OverviewItem from './OverviewItem'

const ClientBusiness = ({data}) => {
    return (
        <div className='ms-6'>
            <h2 className='text-xl font-bold  mt-6 mb-8'>
                Here’s How Our Service Transforms Your Real Estate Business:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {
                    data?.overviewItems?.map(item => <OverviewItem key={item?.title} icon={item?.image}  {...item} />)
                }
            </div>
           
        </div>
    )
}

export default ClientBusiness
