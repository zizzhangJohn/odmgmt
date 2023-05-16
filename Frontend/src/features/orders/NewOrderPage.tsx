import React from 'react'
import { useParams } from 'react-router-dom'
import { Order } from '../../graphql/generated/schema';
import { Container, Grid } from '@mui/material';
import OmHeader from '../../components/elements/OmHeader';
import OrderForm from './orderForm/OrderForm';

export default function NewOrderPage() {
    const params = useParams();
    const customerId = parseInt(params.customerId || '0');
    const order = {
        customerId: customerId
    } as Order;
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OmHeader header={'New Order Details'} />
                </Grid>
                <Grid item xs={12}>
                    <OrderForm order={order} />
                </Grid>
            </Grid>
        </Container>
    )
}
