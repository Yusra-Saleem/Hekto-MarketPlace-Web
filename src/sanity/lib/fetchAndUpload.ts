import { client } from "./client";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

async function fetchDataFromMockApi() {
    const apiUrl = 'https://fakestoreapi.com/products/';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data: Product[] = await response.json();
        console.log("Fetched data:", data);

        // Transform and save products
        const transformedData = data.map((item) => ({
            ...item,
            _type: 'products',
            _id: item.id.toString(),
        }));

        // Save each product individually
        for (const product of transformedData) {
            try {
                await client.create(product); // Assuming `client.create` accepts one product at a time
                console.log(`Product ${product._id} created successfully.`);
            } catch (err) {
                console.error(`Error creating product ${product._id}:`, err);
            }
        }
    } catch (err) {
        console.error("Error fetching or processing data:", err);
    }
}

fetchDataFromMockApi();
