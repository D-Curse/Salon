import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Landing'
import Menu from './pages/Menu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu />}></Route>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;