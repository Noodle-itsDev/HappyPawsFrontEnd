import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './index/components/header/header.tsx'
import SubeHeader from './index/components/subheader/subheader.tsx'
function App() {


  return (
    <>
      <Routes>
        <Route
         path='/' 
         element={
          <>         
          <Header/> 
          <SubeHeader/>
        </>   }/>
       
     
       
      </Routes>
    </>
  )
}

export default App
