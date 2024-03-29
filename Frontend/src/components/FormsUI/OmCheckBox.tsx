import { FormControl, FormControlLabel, FormGroup, Checkbox, FormLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik'

interface OmCheckBoxProps {
    name: string,
    label: string,
    legend: string,
    otherProps: any
}
export default function OmCheckBox({ name, label, legend, otherProps }: OmCheckBoxProps) {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    function handleChange(event: any) {
        const { checked } = event.target;
        setFieldValue(name, checked)
    }
    const configCheckBox = {
        ...otherProps,
        ...field,
        onChange: handleChange,
        checked: meta.value
    }
    const configFormControl: any = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true
    }
    return (
        <FormControl {...configFormControl}>
            <FormGroup>
                <FormLabel component='legend'>{legend}</FormLabel>
                <FormControlLabel
                    control={<Checkbox {...configCheckBox} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>
    )
}
