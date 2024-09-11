import React from 'react'

const OverviewItem = ({icon, title, description}) => {
    return (
        <div className="text-center">
            <img src={icon} alt={`${title} Icon`} className="mx-auto mb-4" />
            <p className="font-semibold my-4">{title}</p>
            <div className="text-md text-gray-600">{description}</div>
        </div>
    )
}

export default OverviewItem
