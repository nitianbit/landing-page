
import React from 'react'
import CitiesCard from './CitiesCard'

const Cities = () => {
    return (
        <div className="border-t border-b p-6">
            <div className='text-3xl flex justify-center font-bold pb-8'>Popular Cities</div>

            <div class="grid gap-4">
                <div class="flex justify-center gap-4">
                    <CitiesCard cityName="Delhi" />
                    <CitiesCard cityName="Gurgaon" />
                    <CitiesCard cityName="Faridabad" />
                    <CitiesCard cityName="Noida" />
                    <CitiesCard cityName="Hyderabad" />
                </div>
                <div class="flex justify-center gap-4">
                    <CitiesCard cityName="Mumbai" />
                    <CitiesCard cityName="Pune" />
                    <CitiesCard cityName="Bengaluru" />
                    <CitiesCard cityName="Chennai" />
                    <CitiesCard cityName="Kolkata" />
                </div>
            </div>
        </div>
    )
}

export default Cities
