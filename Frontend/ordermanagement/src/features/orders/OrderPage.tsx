import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Customer, Order, useGetOrdersByIdQuery } from '../../graphql/generated/schema';
import OmLoading from '../../components/elements/OmLoading';
import OmAlert from '../../components/elements/OmAlert';
import { Container, Grid} from '@mui/material';
import OrderForm from './orderForm/OrderForm';
import OmHeader from '../../components/elements/OmHeader';

export default function OrderPage() {
    const params = useParams();
    const orderId = parseInt(params.orderId || '0');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const { data: orderData, loading: orderLoading, error: orderError } = useGetOrdersByIdQuery({
        variables: {
            id: orderId
        }
    })

    if (orderLoading) {
        return <OmLoading />
    }

    if (orderError || !orderData || !orderData.orders) {
        return <OmAlert message='Error retreiving customer data' />
    }

    const order = orderData.orders[0] as Order;
    const customer = order.customer as Customer;

    return (
        <Container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <OmHeader header='Order Details' />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={12}>
                <OrderForm order={order} />
            </Grid>
        </Container>
    )
}
