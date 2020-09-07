import React from 'react';
import logo from './static/hll_logo copy.png'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="header" style={headerStyle}>
            <img style={imgStyleLogo} src={logo} alt="Huron Lakeshore Laundry Logo"></img>
            <Nav />
        </div>
    );
}

export default Header;

const headerStyle = {
    
    'backgroundColor' : '#00aeee',
    'color' : '#ddd',
}


const imgStyleLogo = {
    'width' : '100%',
    
}