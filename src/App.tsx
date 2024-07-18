import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './index/components/header/header.tsx'
import Logo from './index/components/subheader/logo.tsx'
import Portada from './index/components/portada/portada.tsx'
import { Menu } from './index/components/menu/menu.tsx'
function App() {


  return (
    <>
      <Routes>
        <Route
         path='/' 
         element={
          <>         
          <Header/> 
          <Logo/>
          <Portada/>
          <Menu/>
        </>   }/>
       
     
       
      </Routes>
    </>
  )
}

export default App
