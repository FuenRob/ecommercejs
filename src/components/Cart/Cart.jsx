import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

import CartItem from './item/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();

    if(!cart.line_items) 
        return 'Buscando tus productos';
    
    const EmptyCart = () => {
        <Typography variant="subtitle1">No has añadido ningún producto todavía.</Typography>
    }

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Total: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
                        Carrito vacio
                    </Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                        Tramitar pedido
                    </Button>
                </div>
            </div>
        </>
    }

    return(
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Tu carrito
            </Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    );
}

export default Cart;