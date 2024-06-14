import axios from 'axios';

const API_URL = 'http://20.244.56.144/test'; // Replace with the actual test server URL

const clientID = 'e32d48bd-8313-42db-b310-2afa95c7fba1';
const clientSecret = 'eCLUOBuyXeAOEWqh';

const authHeaders = {
    'Client-ID': clientID,
    'Client-Secret': clientSecret
};

export const fetchProducts = async (company, category, minPrice = 0, maxPrice = 10000, topN = 10) => {
    try {
        const response = await axios.get(
            `${API_URL}/companies/${company}/categories/${category}/products/top-${topN}?minPrice=${minPrice}&maxPrice=${maxPrice}`, 
            { headers: authHeaders }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`, { headers: authHeaders });
        return response.data;
    } catch (error) {
        console.error("Error fetching product details:", error);
        return null;
    }
};
