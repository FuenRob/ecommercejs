import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import ProductsGrid from "./components/Products/ProductsGrid";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
        <Navbar />
        <ProductsGrid />
    </div>
  );
}

export default App;
