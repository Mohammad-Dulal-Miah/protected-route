import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
export const nameContext = createContext(null)

const App = () => {
  const design = { textAlign: 'center' }
  const [name, setName] = useState('')

  return (
    <nameContext.Provider value={[name, setName]}>
      <div style={design}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </nameContext.Provider>
  )
}

export default App
