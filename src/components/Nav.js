import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'





function Nav(props) {
    const element = <FontAwesomeIcon icon={faPhoneSquare}/>
    const compass = <FontAwesomeIcon icon={faCompass}/>
    return (
        <div>
            <nav className="nav">
                <h2>Call Now</h2>
                <div>
                <a id="phone-number" href="tel:4194337627">419-433-7627 <span className="phone-square">{element}</span></a>
                </div>
                <a id="map" href="#">Get Directions {compass}</a>
            <img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> 
            </nav>
        </div>
    )
}

export default Nav



const imgStyle = {
    "maxWidth": '100%',
    'maxHeight' : "1000px"
        
}
