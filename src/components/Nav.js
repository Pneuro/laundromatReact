import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Nav(props) {
    

    function navActive (e) {
        e.preventDefault()
        console.log('SHIT MOTHEFUCKER')
        
        
    }
    return (
        <div>
            <nav>
                
                <div onClick={navActive}  className="burger">
                    <div className="line-1 active"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                
                   
                    <li><img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> </li>
                </div>
                <ul className="nav-style hidden">
                    <li><img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> </li>
                    
                   <Link to="/coin"> <li>Coin Laundry</li></Link>
                    <Link to="/wash">
                    <li>Wash Dry Fold</li>
                    </Link>
                    <Link to="/commercial">
                    <li>Commercial</li>
                    </Link>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    <Link to="/promise">
                    <li>Our Customer Promise</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav



const imgStyle = {
    "width": '100%',
}
