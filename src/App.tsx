import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './index/components/header/header.tsx'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </>
  )
}

export default App
