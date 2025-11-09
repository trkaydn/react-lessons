import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Login() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    function handleFormSubmit(data) {
        console.log(data);
    }

    return (
        <Container maxWidth="xs">
        <Paper sx={{ padding: 2 }} elevation={3}>
            <Avatar sx={{ mx: "auto", mb: 2, color: "secondary.main" }}>
            <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Giriş Yap
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} sx={{ mb: 2 }} noValidate>
            <TextField {...register("username", {required: "Kullanıcı adı zorunludur", minLength: { value: 3, message: "Kullanıcı adı en az 3 karakter olmalıdır" }})} label="Kullanıcı Adı" size="small" fullWidth autoFocus sx={{ mb: 2 }} helperText={errors.username?.message} error={!!errors.username} />
            <TextField {...register("password", {required: "Şifre zorunludur", minLength: { value: 6, message: "Şifre en az 6 karakter olmalıdır" }})} type="password" label="Şifre" size="small" fullWidth sx={{ mb: 2 }} helperText={errors.password?.message} error={!!errors.password} />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }} color="secondary" disabled={!isValid} >
                Giriş Yap
            </Button>
            </Box>
        </Paper>
        </Container>
    );
}