import React, { useState } from 'react';
import { fetchProducts } from '../api';
import ProductList from '../components/productlist';
import { TextField, Button, Grid, MenuItem, Select, FormControl, InputLabel, Pagination } from '@mui/material';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const handleFetchProducts = async () => {
        const fetchedProducts = await fetchProducts(company, category, minPrice, maxPrice, 10);
        setProducts(fetchedProducts);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const displayedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </Grid>
                <Grid item>
                    <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </Grid>
                <Grid item>
                    <TextField label="Min Price" type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </Grid>
                <Grid item>
                    <TextField label="Max Price" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleFetchProducts}>Fetch Products</Button>
                </Grid>
            </Grid>
            <ProductList products={displayedProducts} />
            <Pagination
                count={Math.ceil(products.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
            />
        </div>
    );
};

export default AllProducts;
