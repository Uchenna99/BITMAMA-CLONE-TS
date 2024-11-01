import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'
import LoginPage from './Pages/Login'
import SignupPage from './Pages/Signup'

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
    </>
  )
}

export default App
