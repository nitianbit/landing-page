
import React, {  useEffect, useState } from 'react'
import productService from './productService';
import { useUserContext } from '../../context/UserContext';

const AllProductPage = () => {
    const { project, setProject } = useUserContext()
    const [products, setProducts] = useState(null)
    const getProducts = async (projectId) => {
        try {
            const response = await productService.getProducts(projectId)
            setProducts(response)
        } catch (error) {
            console.error("Error fetching form:", error);
        }
    };

    useEffect(() => {
        if (project?._id)
            getProducts(project?._id)
    }, [project?._id])
    
  return (
    <div className='flex flex-row grid grid-cols-3 gap-12'>
        <div className='col-span-2'>
            1
        </div>
        
        <div className='col-span-10'>
            {/* {products?.length &&
            
            } */}
        </div>
    </div>
  )
}

export default AllProductPage
