import './App.css'
import Graph from "./pages/graph"
import Form from './pages/pages'
import Home from './pages/home'

import Navbar from './components/navbar'
import Background from './components/background'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      <Route path='/graph' element={<Graph />} />
    </Routes>
    </BrowserRouter>
    <Background />

    {/* <div className='navbar-app'>
    <Navbar />
    </div>
    <div className='container-app'>
    <Form />
    <Graph />
    <Home />
    </div>
      <div className='bga'>
      <Background />
      </div> */}
    </>
  )
}

export default App
