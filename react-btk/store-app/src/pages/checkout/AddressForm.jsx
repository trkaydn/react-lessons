import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function AddressForm() {

    const { register, formState: { errors } } = useFormContext();
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("firstname", {
                        required: "İsim giriniz",
                    })}
                    label="İsim"
                    size="small"
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                    error={!!errors.firstname}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("lastname", {
                        required: "Soyisim giriniz",
                    })}
                    label="Soyisim"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.lastname}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("phone", {
                        required: "Telefon numarası giriniz",
                    })}
                    label="Telefon Numarası"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.phone}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                    {...register("city", {
                        required: "Şehir giriniz",
                    })}
                    label="Şehir"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.city}
                />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <TextField
                    {...register("address", {
                        required: "Adres giriniz",
                    })}
                    label="Adres"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.address}
                />
            </Grid>
        </Grid>
    );
}