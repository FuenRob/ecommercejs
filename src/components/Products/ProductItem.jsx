import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const ProductItem = ({product}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant={"h5"} gutterBottom>{product.name}</Typography>
                    <Typography variant={"h5"}>{product.price}</Typography>
                </div>
                <Typography variant={"h2"} color={"testSecondary"}>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActios}>
                <IconButton aria-label={"Añadir al carrito"}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductItem;
