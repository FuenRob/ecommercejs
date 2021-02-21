import React from 'react';
import { Grid } from '@material-ui/core';
import ProductItem from "./ProductItem";

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '60€', image: 'https://contents.mediadecathlon.com/p1065653/k$cb01eeb4a566ba5e51d88ef08c914482/sq/Skechers+Flex+Advantage+Hombre+Zapatillas+Caminar+Negro.webp?f=1000x1000'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '999€', image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201911/15/00115215416353____1__1200x1200.jpg'},
]

const ProductsGrid = () => {
    return (
        <main>
            <Grid container justify={"center"} spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default ProductsGrid;
