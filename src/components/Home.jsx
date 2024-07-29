import { Card } from "flowbite-react";
import Form1 from './Forms/Form1'
import Products from "./Products/Products";
import Form1Section from "./Forms/Form1Section";
const Home = ({ form, project, handleSubmit }) => {
    return (
        <div>
            <Form1Section form={form} handleSubmit={handleSubmit} />

            <div className="container mx-auto px-4 mb-20 mt-16 ">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#faa283" }}>HOT PROPERTIES</h2>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">NEWLY LAUNCHED IN FARIDABAD</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <Products project={project} />
                </div>
            </div>
        </div>
    )
}

export default Home