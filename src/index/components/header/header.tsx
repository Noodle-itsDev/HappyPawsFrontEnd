import { Link } from 'react-router-dom';
import'../header/header.css'


const Header: React.FC = () =>
{
    return(
        <>
        <div id="header"></div>
        <Link to='/' id='acces'>Acceso</Link>
       </>
        

    )

}

export default Header;