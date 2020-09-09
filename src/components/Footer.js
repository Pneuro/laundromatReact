import React from 'react'

function Footer() {
    
    return (
        <div style={footStyle}>
            <ul className="list">
            <h4>Affilliates</h4>
                <li>
                    <a href="https://www.huron.net/">Chamber of Commerce</a>
                </li>
                <li>
                    <a href="https://www.cityofhuron.org/">City of Huron</a>
                </li>
                <li>
                    <a href="https://www.expertlaundryrepair.net">Expert Laundry Repair</a>
                </li>
                <li>
                    <a href="https://www.neurodesignagency.com/">Neuro Design Agency</a>
                </li>
            <h5>Neuro Design Agency // Copyright 2020</h5>
            </ul>
        </div>
    )
}

export default Footer


const footStyle = {
    'color' : '#333',
    'backgroundColor' : '#00aeee',
    'width' : '100%',
    'position' : 'relative',
    'bottom' : '0px',
    'height' : '40vh',
    'display' :'flex',
    'justifyContent' : 'space-around',
    'alignItems': 'center',

}