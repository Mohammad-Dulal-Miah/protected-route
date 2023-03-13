import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { nameContext } from '../../App'

const Login = () => {

  const [name, setName] = useContext(nameContext);
  const navigate = useNavigate();

  const handleUser = () =>{

    navigate('/profile')
  }

  return (
    <div style={{marginTop: '20px'}}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br/>
      <button style={{marginTop: '20px'}} onClick={handleUser}>Login</button>
    </div>
  )
}

export default Login
