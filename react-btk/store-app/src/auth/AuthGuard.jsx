import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard() {
    const { user } = useSelector((state) => state.account);

    return user ? <Outlet /> : <Navigate to="/login" /> 
}