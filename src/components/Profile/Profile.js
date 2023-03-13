import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { nameContext } from '../../App';

const Profile = () => {

    const [name , setName] = useContext(nameContext);
    const navigate = useNavigate();

    const handleUserName = ()=>{

        setName('');
        navigate('/home');
        
    }

    return (
        <div>
            <p>Name:{name} </p>
            <button onClick={handleUserName}>Logout</button>
        </div>
    );
};

export default Profile;