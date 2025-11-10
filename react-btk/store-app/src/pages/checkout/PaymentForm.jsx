import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm() {

    const { register, formState: { errors } } = useFormContext();

    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("cardname", {
                        required: "Ad soyad giriniz",
                    })}
                    label="Ad Soyad"
                    size="small"
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                    error={!!errors.cardname}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("cardnumber", {
                        required: "Kart numarası giriniz",
                    })}
                    label="Kart Numarası"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.cardnumber}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("expirydate", {
                        required: "Son kullanma tarihi giriniz",
                    })}
                    label="Son Kullanma Tarihi"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.expirydate}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("cvv", {
                        required: "CVV giriniz",
                    })}
                    label="CVV"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.cvv}
                />
            </Grid>
        </Grid>
    );
}