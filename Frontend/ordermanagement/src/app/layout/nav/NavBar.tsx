import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <AppBar position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "monospace",
                            fontWeight: 699,
                            letterSpacing: ".2rem",
                            color: 'inherit',
                            textDecoration: 'none'
                        }}>
                        <Link className='text-link' to="/">OrderManagement App</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key="Customers"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            <Link className='text-link' to="/customers">Customers</Link>
                        </Button>
                        <Button
                            key="Orders"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            <Link className='text-link' to="/orders">Orders</Link>
                        </Button>
                        <Button
                            key="NewCustomer"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            <Link className='text-link' to="/customers/newcustomer">New Customer</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
