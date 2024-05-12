import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <div className="w-full flex justify-center">
            <span className="loading loading-infinity w-24"></span>
        </div>

    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} replace={true} to='/login'></Navigate>
    }
};

export default PrivateRoute;