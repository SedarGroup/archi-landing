import React from "react";
import { useState } from "react";
import appData from '../../data/app.json'

const ContactWithMap = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const onSubmit = (event)=>{
    event.preventDefault();
    fetch('/.netlify/functions/sendMail',{
      method:'POST',
      body:JSON.stringify({
        email,
        subject,
        message
      })
    })
    alert("Message envoyé avec succès");
    window.location.href="/"
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" onSubmit={onSubmit}>
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_subject"
                  type="text"
                  onChange={(event) => setSubject(event.target.value)}
                  name="subject"
                  placeholder="Objet"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  onChange={(event) => setMessage(event.target.value)}
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Envoyer</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
