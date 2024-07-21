import'./adoptions.css'
import img8 from'./../../assets-index/10.png'
import img9 from'../../assets-index/11.png'
import img10 from'../../assets-index/12.png'
import img11 from'../../assets-index/9.png'
import img12 from'../../assets-index/13.png'


function Adoptions()
{
    return(
        <>
       <div id="backgrpound-mask">
            <img  id='fondo-superior-izquierda' src={img8}/>
            <img id='fondo-inferior-izquierda' src={img9}/>
            <img id='foto-perro' src={img10}/>
            <img id='fondo-inferior-derecha' src={img11}/>
            <img id='background-adoptions' src={img12}/>
        </div>
        </>
    )
}

export default Adoptions;