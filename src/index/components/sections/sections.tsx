
import'./sections.css';
import img12 from '../../assets-index/4.png';
import img13 from '../../assets-index/14.png'
import { Link } from 'react-router-dom';

const FooterHome: React.FC = () =>
{
    return(
        <>
        <img src={img12} id="background-footer"/>
       
        <Link to={"/cuidar"} id='cuidar-link'>
         <b id="cuidar-title">Cuidar</b>
        <div id="cuidar-section"></div> 
        </Link>

        <Link to={"/donar"} id='donar-link'>
          <b id="donar-title">Donar</b> 
        <div id="donar-section"></div>
         </Link>

        <Link to={"/adoptar"} id='adoptar-link'>  
        <b id="adoptar-title">Adoptar</b>
        <img src={img13} id="adoptar-section"/>
        </Link> 
        </>
    )
}

export default FooterHome;