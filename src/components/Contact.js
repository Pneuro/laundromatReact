import React, { useState } from 'react';
import {db} from "./Firebase";
import{ init } from 'emailjs-com';




init("user_eTrnCgIl61XrhLOp0wdK9");


function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name : name,
            email:email,
            message:message,
        }).then(() => {
            alert("Message sent!")
        }).catch(error => {
            alert(error.message);
        });

        setName('')
        setEmail('')
        setMessage('')
    }
    
    return (
        <div className="contact">
            <div className="content">
            <h2>Contact</h2>
            <p>We love to hear your feedback!
                Please give us the opportunity to hear your story and experience with our store. 
                We appreciate your business. Find us on <a href="www.facebook.com/huronlakeshorelaundry/">Facebook</a> and <a href="www.twitter.com/huronlakeshorelaundry">Twitter</a>!
            </p>
            <h3></h3>

          <a href="mailto:huronlakeshorelaundry@gmail.com">huronlakeshorelaundry@gmail.com</a>
        </div>
        </div>
    )
};

export default Contact
