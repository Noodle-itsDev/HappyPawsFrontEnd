import { Link } from 'react-router-dom';
import'../header/header.css'
function Header()
{
    return(
        <>
        <div id="header"></div>
        <Link to='/' id='acces'>Acceso</Link>
       </>
        

    )

}

export default Header;