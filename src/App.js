import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/allproduct';
import ProductDetails from './pages/productdetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
