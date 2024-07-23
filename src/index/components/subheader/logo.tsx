import img from'../../assets-index/LogoPaws.png'
import'./logo.css'
const Logo: React.FC = () =>
{
    return(
        <>
        <div id='subheader'>
        <img className='Logo'src={img} id='logo'/>
        </div>
        
        </>
    )

}

export default Logo;