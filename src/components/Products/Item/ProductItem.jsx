import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const ProductItem = ({product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>{product.name}</Typography>
                    <Typography variant="h6">{product.price.formatted_with_symbol}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h7" color={"testSecondary"} />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActios}>
                <IconButton aria-label={"Añadir al carrito"} onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductItem;
