
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Signin } from "./pages/signin" //named import
import SigninPage from "./pages/signin" //default import
import Dashboard from './pages/dashboard'

function App() {

  return <Routes>
    <Route path='signin' element={<SigninPage />} />
    <Route path='dashboard' element={<Dashboard />} />
  </Routes>
}

export default App
