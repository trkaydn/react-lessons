import { InputAdornment, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function TextFieldUsage() {
    return (
        <>
        <Stack spacing={3}>
            <TextField label="Standard" variant="standard" />
            <TextField label="Filled" variant="filled" />
            <TextField label="Outlined" variant="outlined" />
        </Stack>

        <Stack direction="row" spacing={3} mt={3}>
            <TextField label="Standard" variant="standard" size='small' />
            <TextField label="Filled" variant="filled" size='medium' />
            <TextField label="Outlined" variant="outlined" size='large' type='password' />
        </Stack>

        <Stack direction="row" spacing={3} mt={3}>
            <TextField label="Outlined" slotProps={{input: {startAdornment: <InputAdornment position="start">₺</InputAdornment>}}} variant="standard" size='small' />
        </Stack>
        </>
    );
}