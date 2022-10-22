import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvaider } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const { loading, user } = useContext(AuthProvaider);
    const location = useLocation()

    if(loading){
        return <div className='h-[60vh] flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
        </div>
    }

    if(!user){
        return <Navigate to='/login' state={{path: location}} replace ></Navigate>
    }
    

    return children;
};

export default PrivateRoute;