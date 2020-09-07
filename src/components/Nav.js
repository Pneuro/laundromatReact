import React from 'react'






function Nav(props) {
    return (
        <div>
            <nav>
            <img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> 
            </nav>
        </div>
    )
}

export default Nav



const imgStyle = {
    "width": '100%',
  
    
}
