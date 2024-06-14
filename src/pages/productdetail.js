import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../api';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const product = await fetchProductDetails(id);
            setProduct(product);
        };
        loadProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={`https://picsum.photos/200/140?random=${product.id}`} // Random image
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {product.available ? 'In Stock' : 'Out of Stock'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetails;
