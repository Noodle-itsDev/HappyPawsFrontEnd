
import'./footer.css';
import img12 from '../../assets-index/4.png';
import img13 from '../../assets-index/14.png'

const FooterHome: React.FC = () =>
{
    return(
        <>
        <img 
        src={img12} 
        id="background-footer"
        className="flex negative w-[96vw] h-[80vh] -bottom-[292rem] z-2 "
        />
        <b id="cuidar-title">Cuidar</b>
        <div id="cuidar-section"></div>
        <b id="donar-title">Donar</b>
        <div id="donar-section"></div>
        <b id="adoptar-title">Adoptar</b>
        <img src={img13} id="adoptar-section"/>
        </>
    )
}

export default FooterHome;