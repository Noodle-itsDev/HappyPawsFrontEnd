import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './index/components/header/header.tsx'
import Logo from './index/components/subheader/logo.tsx'
import Portada from './index/components/portada/portada.tsx'
import { Menu } from './index/components/menu/menu.tsx'
import Encuesta from './index/components/encuesta/encuesta.tsx'
import Info from './index/components/info/info.tsx'
import Maps from './index/components/maps/maps.tsx'
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
          <Encuesta/>
          <Info/>
          <Maps/>
        </>   }/>
       
     
       
      </Routes>
    </>
  )
}

export default App
