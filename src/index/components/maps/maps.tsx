import './maps.css'
import img7 from'../../assets-index/8.png'

const Maps: React.FC = ()=>
{
    return(
        <>
        <div id='background2'></div>
        <img src={img7} id='img-protect-maps'/>
        <b id='descripcion-seccion-mapa'>Descubre las protectoras cerca de ti </b>
        <button id='boton-del-mapa'>Ir</button>
        </>
    )
}

export default Maps;