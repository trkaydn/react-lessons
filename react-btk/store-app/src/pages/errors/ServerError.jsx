import { Alert, Paper, Typography, Button } from "@mui/material";
import { useLocation, Link } from "react-router";

export default function ServerError() {
    const { state } = useLocation();

    return (
        <Paper sx={{ p: 3 }}>
            {state?.error ? (
                <>
                    <Typography variant="h4" gutterBottom>
                        {state.error.message} - {state.status}
                    </Typography>
                    <Alert severity="error">
                        {state.error.details || "Internal Server Error"}
                    </Alert>
                </>

            ) : (
                <>
                    <Typography variant="h4" gutterBottom>
                        Internal Server Error
                    </Typography>
                    <Alert severity="error">
                        An unexpected error occurred.
                    </Alert>
                </>
            )}
            <Button component={Link} to="/" variant="contained" color="secondary" sx={{ mt: 2 }}>
                Go to Home
            </Button>
        </Paper>
    );
}