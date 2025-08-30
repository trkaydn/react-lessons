import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function RadioButtonUsage() {

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
       <Box>
           <FormControl>
            <FormLabel>Eğitim Durumu</FormLabel>
            <RadioGroup name="egitim" defaultValue="0" onChange={handleChange} row>
                <FormControlLabel value="0" control={<Radio />} label="İlkokul" />
                <FormControlLabel value="1" control={<Radio />} label="Ortaokul" />
                <FormControlLabel value="2" control={<Radio />} label="Lise" />
                <FormControlLabel value="3" control={<Radio />} label="Üniversite" />
            </RadioGroup>
            </FormControl>
       </Box>
    );
}
