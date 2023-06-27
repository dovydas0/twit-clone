import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "./store/store";

interface ProtectedRouteProps {
    children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children
}) => {
    const loggedUser = useAppSelector(state => state.user);    

    if (Object.keys(loggedUser).length < 1) {
        return <Navigate to='/login' />;
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute