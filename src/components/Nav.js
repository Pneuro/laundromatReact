import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'





function Nav(props) {
    const element = <FontAwesomeIcon icon={faPhoneSquare}/>
    return (
        <div>
            <nav className="nav">
                <h2>Huron Lakeshore Laundry - Call Now</h2>
                <a id="phone-number" href="tel:4194337627">419-433-7627 <span className="phone-square">{element}</span></a>
                
      
            <img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> 
            </nav>
        </div>
    )
}

export default Nav



const imgStyle = {
    "width": '100%',
        
}
