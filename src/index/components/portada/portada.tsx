import img1 from'../../assets-index/3.png'
import img2 from'../../assets-index/4.png'
import img3 from '../../assets-index/5.png'
import'./portada.css'
function Portada()
{
    return(
        <>
        <div id='background'></div>
        <img src={img1} alt="imagen de portada" id='portada'/>
        <img src={img2} alt='heart1' id='heart1'/>
        <img src={img3} alt='heart2' id='heart2'/>
        </>
    )
}

export default Portada;