import { AppBar, Toolbar, Box, IconButton, Button, Badge } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { NavLink } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../pages/account/accountSlice";

const links = [
    {to: "/", label: "Home"},
    {to: "/products", label: "Products"},
    {to:"/error", label: "Errors"},
];

const authLinks = [
    {to: "/login", label: "Login"},
    {to: "/register", label: "Register"}
];

export default function Navbar() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <AppBar position="static" sx={{backgroundColor: "secondary.light"}}>
      <Toolbar>

        <Box sx={{display: "flex", flexGrow: 1, alignItems: "center"}}>
            <IconButton color="inherit">
                <StorefrontIcon />  
            </IconButton>

            {links.map((link) => (
                 <Button key={link.to} component={NavLink} to={link.to} color="inherit">{link.label}</Button>
            ))}
        </Box>

        <Box sx={{display: "flex", alignItems: "center"}}>
            <IconButton color="inherit" component={NavLink} to="/cart" size="large" edge="start">
                <Badge badgeContent={cart ? cart.cartItems.reduce((acc, item) => acc + item.product.quantity, 0) : 0} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            {user ? 
              <>
              <Button color="inherit">{user.username}</Button>
              <Button color="inherit" onClick={() => dispatch(logout())}>Çıkış Yap</Button>
              </>  
              : authLinks.map((link) => (
                  <Button key={link.to} component={NavLink} to={link.to} color="inherit">{link.label}</Button>
              ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}