import Button from '@mui/material/Button';
import { ButtonGroup, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material';

export default function ButtonUsage() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Click Me</Button>
                <Button variant="text">Click Me</Button>
                <Button variant="outlined">Click Me</Button>
            </Stack>

            <Stack spacing={2} direction="row" sx={{mt: 2}}>
                <Button variant="contained" color='success'>Click Me</Button>
                <Button variant="text" color='success'>Click Me</Button>
                <Button variant="outlined" color='success'>Click Me</Button>
            </Stack>

            <div style={{marginTop: '16px'}}>
                <Button variant="contained" color='error' size='small'>Click Me</Button>
                <Button variant="text" color='error' size='medium' startIcon={<SendIcon />}>Click Me</Button>
                <Button variant="outlined" color='error' size='large' endIcon={<SendIcon />}>Click Me</Button>
            </div>

            <div style={{marginTop: '16px'}}>
                <IconButton color='error' size='small'>
                    <DeleteIcon />
                </IconButton>
            </div>

            <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
        </>
    );
}