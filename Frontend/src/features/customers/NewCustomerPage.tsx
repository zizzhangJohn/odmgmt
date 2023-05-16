import { Container, Grid } from '@mui/material';
import React from 'react'
import { Customer } from '../../graphql/generated/schema';
import OmHeader from '../../components/elements/OmHeader';
import CustomerForm from './customerForms/CustomerForm';

export default function NewCustomerPage() {
    const customer = {} as Customer;
    return (
        <Container>
            <Grid item xs={12}>
                <OmHeader header={'New Customer Details'} />
            </Grid>
            <Grid item xs={12}>
                <CustomerForm customer={customer} />
            </Grid>
        </Container>
    )
}
