import React from 'react';

import ProductsGrid from "./components/Products/ProductsGrid";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <ProductsGrid />
    </div>
  );
}

export default App;
