import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { nameContext } from '../../App';

const ProtectedRoute = ({children}) => {

    const [name , setName] = useContext(nameContext);
    
    if(name.length !== 0){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default ProtectedRoute;