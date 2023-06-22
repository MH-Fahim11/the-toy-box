import {  useContext } from 'react';
import { AuthContext } from '../providers/AuhtProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <DotLoader color="#36d7b7" /> ;
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;