import'./adoptions.css'
import img8 from'./../../assets-index/10.png'
import img9 from'../../assets-index/11.png'
import img10 from'../../assets-index/12.png'
import img11 from'../../assets-index/9.png'



const Adoptions:React.FC = () =>
{
    return(
        <>
            <div id="fondo-adopciones"></div>
            <img  id='fondo-superior-izquierda' src={img8}/>
            <img id='fondo-inferior-izquierda' src={img9}/>
            <img id='fondo-inferior-derecha' src={img10}/>
            <img id='foto-perro' src={img11}/>
            <b id='descripcion-adopciones'>Queremos que los animales de edad avanzada también disfruten de tu cariño.</b>
            <b id='titulo-adopciones'>Adopta a un canino o felino adulto</b>
            <button id='boton-de-adopciones'>Ir</button>
        </>
    )
}

export default Adoptions;