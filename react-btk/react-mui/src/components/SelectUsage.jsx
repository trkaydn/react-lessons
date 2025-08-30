import {Box, TextField,MenuItem } from '@mui/material';
import { useState } from 'react';

const cities = [
    {label: "Istanbul", value: 34},
    {label: "Ankara", value: 6},
    {label: "Izmir", value: 35}
]


export default function SelectUsage() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Box width="300px">
            <TextField select label="Select" variant="outlined" fullWidth value={selectedOption} onChange={handleChange}>
                {cities.map((city) => (
                    <MenuItem key={city.value} value={city.value}>
                        {city.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}
