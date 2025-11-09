import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, CircularProgress, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./accountSlice";

export default function Register() {
    
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.account);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
            defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });
        
    function handleFormSubmit(data) {
       dispatch(registerUser(data));
    }

    return (
        <Container maxWidth="xs">
        <Paper sx={{ padding: 2 }} elevation={3}>
            <Avatar sx={{ mx: "auto", mb: 2, color: "secondary.main" }}>
            <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Kayıt Ol
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} sx={{ mb: 2 }} noValidate>
            <TextField {...register("username", {required: "Kullanıcı adı zorunludur", minLength: { value: 3, message: "Kullanıcı adı en az 3 karakter olmalıdır" }})} name="username" label="Kullanıcı Adı" size="small" fullWidth autoFocus sx={{ mb: 2 }} />
            <TextField {...register("email", {required: "E-posta zorunludur", pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Geçerli bir e-posta adresi giriniz" }})} name="email" label="E-posta" size="small" fullWidth sx={{ mb: 2 }} />
            <TextField {...register("password", {required: "Şifre zorunludur", minLength: { value: 6, message: "Şifre en az 6 karakter olmalıdır" }})} name ="password" type="password" label="Şifre" size="small" fullWidth sx={{ mb: 2 }} />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }} color="secondary" disabled={!isValid} >
                {status === "pending" ? <CircularProgress size={"25px"} /> : "Kayıt Ol"}
            </Button>
            </Box>
        </Paper>
        </Container>
    );
}