import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
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
                <Link to={`/product/${product.id}`}>View Details</Link>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
