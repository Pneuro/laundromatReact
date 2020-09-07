import React, {useState} from 'react'
import { Link } from 'react-router-dom';





function Nav(props) {
    const [menu, setMenu] = useState(false);
   
    const navActive = () => {
        setMenu((prev) => !prev);
        
    }
    return (
        <div>
            <nav>
                
                <div onClick={navActive}  className={menu ? "burger" : "burger"}>
                    <div className={menu ? "line-1" : "active line-1"}></div>
                    <div className={menu ? "line-2" : "active line-2"}></div>
                    <div className={menu ? "line-3" : "active line-3"}></div>

                    <li><img style={imgStyle} src={props.image} alt="Huron Lakeshore Laundry Logo"></img> </li>
                
                   
                </div>
                <ul className={menu ? "nav-style" : "nav-style hidden"}>
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
