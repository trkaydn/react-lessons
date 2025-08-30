import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TypographyUsage() {
    return (
        <Box sx={{ width: "100%", maxWidth: 800 }}>
            <Typography variant="h1" component="h2" gutterBottom noWrap color='primary'>h1 React Material UI</Typography>
            <Typography variant="h2" gutterBottom color="error">h2 React Material UI</Typography>
            <Typography variant="h3" gutterBottom>h3 React Material UI</Typography>
            <Typography variant="h4" gutterBottom>h4 React Material UI</Typography>
            <Typography variant="h5" gutterBottom>h5 React Material UI</Typography>
            <Typography variant="h6" gutterBottom>h6 React Material UI</Typography>
            <Typography variant="subtitle1" gutterBottom>subtitle1 React Material UI</Typography>
            <Typography variant="subtitle2" gutterBottom>subtitle2 React Material UI</Typography>
            <Typography variant="body1" gutterBottom>body1 React Material UI</Typography>
            <Typography variant="body2" gutterBottom>body2 React Material UI</Typography>
        </Box>
    );
}
