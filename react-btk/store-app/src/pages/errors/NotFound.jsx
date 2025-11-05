import { Alert, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>
            <Alert severity="error">
                The page you are looking for does not exist.
            </Alert>
            <Button component={Link} to="/" variant="contained" color="secondary" sx={{ mt: 2 }}>
                Go to Home
            </Button>
        </Paper>
    );
}