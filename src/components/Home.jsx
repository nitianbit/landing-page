import { Card } from "flowbite-react";
import Form1 from './Forms/Form1'
import Products from "./Products/Products";
import Form1Section from "./Forms/Form1Section";
import { useEffect, useState } from "react";
import { doGET } from "../utils/HttpUtils";
import { Link, useNavigate } from "react-router-dom";
import productService from "./Products/productService";
import Button from "./Button/Button";
const Home = ({ form, project, handleSubmit }) => {
    const navigate = useNavigate();
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
        <div>
            <div className="container mx-auto px-4 mb-20 mt-16 ">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#faa283" }}>HOT PROPERTIES</h2>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">NEWLY LAUNCHED IN FARIDABAD</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <Products project={project} products={products} />

                    {products?.length > 3 &&
                    <Button text="View All" className="cursor-pointer px-4 py-0 font-rasputin" onClick={()=>{
                        navigate("/products")
                    }}/>
                         } 
                </div>
            </div>
        </div>
    )
}

export default Home
