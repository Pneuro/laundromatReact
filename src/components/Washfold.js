import React from 'react'

function Washfold() {
    return (
        <div className="washfold">
            <div className="content">
            <h2>Wash Dry Fold & Drop Off Services</h2>
            <p>Our facility allows drop off for all laundry services by appointment only.
                We're happy to accomodate times for our customers as we build up the momentum of this newly established portion of our business!
                
            </p>
            <h3>Residential Laundry Service</h3>
            <ul>
                <h4>24 hours service</h4>
                <li>$1.29/pound = $9.03/load</li>
                <h4>Same Day service</h4>
                <li> $1.69/pound = ${1.69*8}/load</li>
            </ul>
            {/* I need to put a load calculater here  */}
            </div>
        </div>
    )
}

export default Washfold