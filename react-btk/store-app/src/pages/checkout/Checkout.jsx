import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const steps = ['Kargo Bilgileri', 'Ödeme Bilgileri', 'Sipariş Özeti'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
    }
}

export default function Checkout() {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep <= steps.length - 1 ? prevActiveStep + 1 : prevActiveStep);
    };

    const handlePrevious = () => {
        setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep);
    };

    return (
        <Paper>
            <Grid container spacing={3}>
                <Grid size={4} sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}>
                    <Info />
                </Grid>
                <Grid size={8} sx={{ p: 3 }}>
                    <Stepper activeStep={activeStep} sx={{ height: 40, mb: 4 }}>
                        {steps.map((label) => (
                            <Step key={label} sx={{ color: "secondary" }}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {
                        activeStep === steps.length ? (
                            <Typography variant="h5" align="center">Siparişiniz Alındı Teşekkür Ederiz!</Typography>
                        ) :
                            <>
                                {getStepContent(activeStep)}
                                <Box sx={[{ display: 'flex' }, activeStep !== 0 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }]}>
                                    {activeStep > 0 && <Button onClick={handlePrevious} startIcon={<ChevronLeftRounded />} variant="contained" color="secondary">Geri</Button>}
                                    <Button onClick={handleNext} startIcon={<ChevronRightRounded />} variant="contained" color="secondary">İleri</Button>
                                </Box>
                            </>
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}