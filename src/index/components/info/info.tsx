import'./info.css'
import img4 from'../../assets-index/5.png'
import img5 from'../../assets-index/6.png'
import img6 from '../../assets-index/4.png'


function Info()
{
    return(
        <>
        <img src={img4} alt='Background' id='img'/>
        <img src={img5} alt="Background1" id='img1' />
        <img src={img6} alt='backgroud0' id='imagen-fondo'/>
        <p id='txt2'><b>Happy Paws</b> ayuda a las personas que quieren poner su granito de arena en las protectoras.</p>
        <button id='btn1'>Saber más</button>
        </>
    )

}
export default Info;