import'./info.css'
import img4 from'../../assets-index/7.png'
import img5 from'../../assets-index/8.png'

function Info()
{
    return(
        <>
        <img src={img4} alt='Background' id='img'/>
        <img src={img5} alt="Background1" id='img1' />
        <p id='txt2'><b>Happy Paws</b> ayuda a las personas que quieren poner su granito de arena en las protectoras.</p>
        <button id='btn1'>Saber más</button>
        </>
    )

}
export default Info;