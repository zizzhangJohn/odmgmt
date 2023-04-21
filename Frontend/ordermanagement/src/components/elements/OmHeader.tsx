import { Typography } from '@mui/material';
import React from 'react'

interface OmHeaderProps {
    header: string;
}

export default function OmHeader({ header }: OmHeaderProps) {
    return (
        <Typography component='div' variant='h5' display='block' gutterBottom align='center' sx={{ my: '1.5rem' }}>
            {header}
        </Typography>
    )
}
