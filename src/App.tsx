import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Graph from "./pages/graph"
import Form from './pages/form'
import Background from './components/background'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Background />
      {/* <Graph /> */}
    <Form />
    </>
  )
}

export default App
