import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbarr from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Product from './component/Product'
import Blogs from './component/Blogs'
import Contact from './component/Contact'
import SingalPost from './component/SingalPost'
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navbarr/>
<div className='brows'>

<Routes>
 <Route index element={<Home/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/product' element={<Product/>} />
 <Route path='/blog' element={<Blogs/>} />
 <Route path='/contact' element={<Contact/>} />
 <Route path='/singal' element={<SingalPost/>} />
</Routes>

</div>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App