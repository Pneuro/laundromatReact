import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Promise() {
    const heart = <FontAwesomeIcon icon={faHeart}/>
    return (
        <div className="promise">
            <div className="content">
            <h2>{heart} Our Customer Promise</h2>
            <p>Our promise is to cleanliness. 
                Our dedication is to a clean laundromat. 
                Weekly and monthly maintenance routines ensure that our equipment is functioning. 
                Daily cleaning routines ensure the health and safety of our customers. 
                Your clothes represent who you are, your appearance and presentation, and we respect that. 
                If you trust us with your clothes we'll make sure they're clean every time. 
                From our family to yours. <br></br>
                -Huron Lakeshore Laundry-
                
                </p>
        </div>
        </div>
    )
}

export default Promise
