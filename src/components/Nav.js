import React from 'react'

function Nav() {
    function navActive (e) {
        e.preventDefault()
        console.log('SHIT MOTHEFUCKER')
        
        
    }
    return (
        <div>
            <nav>
                <div onClick={navActive}  className="burger">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                
                <ul style={navStyle}>
                    <li><a style={linkStyle} href="#">Coin Laundry</a></li>
                    <li><a style={linkStyle} href="#">Wash Dry Fold</a></li>
                    <li><a style={linkStyle} href="#">Commercial</a></li>
                    <li><a style={linkStyle} href="#">About</a></li>
                    <li><a style={linkStyle} href="#">Contact</a></li>
                    <li><a style={linkStyle} href="#">Our Customer Promise</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav





const navStyle = {
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'padding': '20px',
    'justifyContent': 'space-around',
    'listStyle' : 'none',
    'backgroundColor' : '#333',
    'color' : '#ddd',
    

    
}
const linkStyle = {
    'textDecoration': 'none',
    'color' : '#ddd',
    'padding' : '20px',
}

