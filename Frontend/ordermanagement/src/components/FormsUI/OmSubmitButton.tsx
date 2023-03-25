import { Button } from '@mui/material';
import { FullWidth } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { useFormikContext } from 'formik'
import React from 'react'
interface OmSubmitButtonProps {
    children: any,
    otherProps: any
}
export default function OmSubmitButton({ children, otherProps }: OmSubmitButtonProps) {
    const { submitForm } = useFormikContext();
    function handleSubmit() {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        color: 'primary',
        variant: 'contained',
        fullWidth: true,
        onclick: handleSubmit
    }
    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
}
