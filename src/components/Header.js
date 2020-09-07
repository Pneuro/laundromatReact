import React from 'react';
import logo from './static/hll_logo copy.png'
import Nav from './Nav'

const Header = () => {
    return (
        <div className="header" style={headerStyle}>
            
            <Nav image={logo} />
        </div>
    );
}

export default Header;

const headerStyle = {
    
    'backgroundColor' : '#00aeee',
    'color' : '#ddd',
}

