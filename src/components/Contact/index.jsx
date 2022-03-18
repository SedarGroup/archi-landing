import React from "react";
import { useState } from "react";
import appData from "../../data/app.json";
const Contact = () => {
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
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form onSubmit={onSubmit} id="contact-form">
                <div className="section-head">
                  <h6>Contactez nous</h6>
                  <h4 className="playfont">Collaborons</h4>
                </div>
                <div className="messages"></div>
                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      onChange={(event) => setSubject(event.target.value)}
                      placeholder="Objet"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="form_email"
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Message"
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
        <div className="contact-map">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(/assets/img/2.jpg)" }}
        ></div>
      </section>
    </>
  );
};
export default Contact;
