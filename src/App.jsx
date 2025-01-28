import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import Posts from './Components/Posts'
import Myposts from './Components/Myposts'
import PostCard from './Components/PostCard'
import CreatePost from './Components/CreatePost'
import Updatedetails from './Components/Updatedetails'

function App() {


  return (
    <>
     <div className='bg-gray-200 w-full flex flex-col'>
      <BrowserRouter>
      <nav>
     <Navbar/>
     </nav>
     <main className='flex-grow min-h-screen m-0 p-0'>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/posts' element={<Posts/>}/>
     <Route path='/myposts' element={<Myposts/>}/>
     <Route path='/update/:id' element={<Updatedetails/>}/>
     <Route path='/createpost' element={<CreatePost/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     </Routes>
     </main>
     </BrowserRouter>
     <footer>
     <Footer/>
     </footer>
    </div>
     <ToastContainer position='bottom-right'/>
    </>
  )
}

export default App
