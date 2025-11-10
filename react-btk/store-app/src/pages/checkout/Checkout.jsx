import { Box, Button, CircularProgress, Grid, Paper, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { FormProvider, set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import requests from "../../api/apiClient";
import { Link } from "react-router";

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
    const [orderId, setOrderId] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const methods = useForm();

    async function handleNext(data) {
        if (activeStep === 2) {
            try {
                setLoading(true);
                const result = await requests.orders.createOrder(data);
                setOrderId(result.orderId);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                dispatch(ClearCart());
            }
            catch (error) {
                console.error("Order creation failed:", error);
            } finally {
                setLoading(false);
                return;
            }
        }
        setActiveStep((prevActiveStep) => prevActiveStep <= steps.length - 1 ? prevActiveStep + 1 : prevActiveStep);
    };

    const handlePrevious = () => {
        setActiveStep((prevActiveStep) => prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep);
    };

    return (
        <FormProvider {...methods}>
            <Paper>
                <Grid container spacing={3}>

                    {activeStep !== steps.length && (
                        <Grid size={4} sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}>
                            <Info />
                        </Grid>
                    )}

                    <Grid size={activeStep !== steps.length ? 8 : 12} sx={{ p: 3 }}>
                        <Stepper activeStep={activeStep} sx={{ height: 40, mb: 4 }}>
                            {steps.map((label) => (
                                <Step key={label} sx={{ color: "secondary" }}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {
                            activeStep === steps.length ? (
                                <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="h5" align="center">Siparişiniz Alındı!</Typography>
                                    <Typography variant="h5" align="center">Sipariş Numaranız: <strong>{orderId}</strong></Typography>
                                    <Button component={Link} to="/orders" variant="contained" color="secondary" compo>Tüm Siparişlerim</Button>
                                </Stack>

                            ) :
                                <form onSubmit={methods.handleSubmit(handleNext)}>
                                    {getStepContent(activeStep)}
                                    <Box sx={[{ display: 'flex' }, activeStep !== 0 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }]}>
                                        {activeStep > 0 && <Button onClick={handlePrevious} startIcon={<ChevronLeftRounded />} variant="contained" color="secondary">Geri</Button>}
                                        <Button type="submit" startIcon={<ChevronRightRounded />} variant="contained" color="secondary">{loading ? (<CircularProgress />) : (activeStep === 2 ? "Siparişi Tamamla" : "İleri")}</Button>
                                    </Box>
                                </form>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </FormProvider>
    );
}