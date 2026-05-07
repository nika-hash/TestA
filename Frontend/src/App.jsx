import './App.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import { Routes, Route } from "react-router-dom"
import Home from './routes/Home'
import Shop from './routes/Shop'
import Products from './routes/SingleProduct'
import Blog from './routes/Blog'
import Contact from './routes/Contact'
import About from './routes/About'
import Slider from './components/Slider'

function App() {

  return (
    <>
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Header>
    <Main>
      <Slider/>
    </Main>
    <Footer/>
    </>
  )
}

export default App
