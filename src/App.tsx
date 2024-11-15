import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Graph from "./pages/graph"
import Form from './pages/form'
import Background from './components/background'
import Home from './pages/pages'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar-app'>
    <Navbar />
    </div>
    <div className='container-app'>
    {/* <Form /> */}
    {/* <Graph /> */}
    <Home />
    </div>
      <div className='bga'>
      <Background />
      </div>
    </>
  )
}

export default App
