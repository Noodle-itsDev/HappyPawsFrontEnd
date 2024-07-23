import './maps.css'
import img7 from'../../assets-index/8.png'
import { Link } from 'react-router-dom'

const Maps: React.FC = ()=>
{
    return(
        <>
        <div id='background2'></div>
        <img src={img7} id='img-protect-maps'/>
        <b id='descripcion-seccion-mapa'>Descubre las protectoras cerca de ti </b>
       <Link to={"/boton"}> <button id='boton-del-mapa'>Ir</button></Link>
        </>
    )
}

export default Maps;