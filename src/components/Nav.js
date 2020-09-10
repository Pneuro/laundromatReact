import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'



function Nav(props) {
    const element = <FontAwesomeIcon icon={faPhoneSquare}/>
    const compass = <FontAwesomeIcon icon={faCompass}/>
    return (
        <div>
            <nav className="nav">
                <div>
                <a id="phone-number" href="tel:4194337627">419-433-7627 <span className="phone-square">{element}</span></a>
                </div>
                <a id="map" href="https://www.google.com/maps/dir//huron+lakeshore+laundry/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883a6b7fa41af895:0x1c2648b4fc6d4954?sa=X&ved=2ahUKEwjMj9a91t3rAhX6B50JHUkNA7YQ9RcwPHoECDwQBA">Get Directions {compass}</a>
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
