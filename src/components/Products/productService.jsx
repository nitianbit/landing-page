import { doGET } from "../../utils/HttpUtils";

class Service{
    data = {};

    getProducts = async (projectId) => {
        try {
            if(this.data[projectId]) return this.data[projectId];
            const response = await doGET(`/getProductsByProject/${projectId}`);
            this.data[projectId] = response
            return response
        } catch (error) {
            console.error("Error fetching form:", error);
            throw error
        }
    };
};

const productService = new Service()
export default productService;
