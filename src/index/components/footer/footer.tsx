import React from "react";
import'./footer.css';
import img12 from '../../assets-index/4.png';
import img13 from '../../assets-index/14.png'

function FooterHome()
{
    return(
        <>
        <img src={img12} id="background-footer"/>
        <div id="cuidar-section"></div>
        <div id="donar-section"></div>
        <img src={img13} id="adoptar-section"/>
        </>
    )
}

export default FooterHome;