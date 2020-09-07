import React from 'react'

function Contact() {

    const handleSubmit = {
        handleSubmit( event ) {
            event.preventDefault();
            console.log(this.state);
          }
    }
    return (
        <div className="contact">
            <div className="content">
            <h2>Contact</h2>
            <p>We love to hear your feedback!
                Please give us the opportunity to hear your story and experience with our store. 
                We appreciate your business. Find us on <a href="www.facebook.com/huronlakeshorelaundry/">Facebook</a> and <a href="www.twitter.com/huronlakeshorelaundry">Twitter</a>!
            </p>

            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>        
        </div>
        </div>
    )
}

export default Contact
