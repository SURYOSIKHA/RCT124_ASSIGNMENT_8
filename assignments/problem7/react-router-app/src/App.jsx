import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Users} from './pages/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <nav>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
    </>
  )
}

export default App
