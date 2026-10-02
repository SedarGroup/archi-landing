import React from "react";
import { useState } from "react";
import appData from "../../data/app.json";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify({ email, subject, message }),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

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
                  <p className="sg-contact__lead">
                    Une question, un projet, une visite à programmer ? Écrivez-nous, nous
                    revenons vers vous sous 48 heures.
                  </p>
                </div>
                {status === "sent" ? (
                  <div className="sg-alert sg-alert--success" role="status">
                    Merci, votre message est bien parti. Notre équipe vous répond sous 48
                    heures.
                  </div>
                ) : (
                  <div className="controls">
                    {status === "error" && (
                      <div className="sg-alert sg-alert--error" role="alert">
                        L&apos;envoi a échoué. Réessayez dans un instant, ou appelez-nous au
                        +221 78 444 60 02.
                      </div>
                    )}
                    <div className="form-group">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        placeholder="Objet"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="form_email"
                        value={email}
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
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-curve btn-color"
                      disabled={status === "sending"}
                    >
                      <span>{status === "sending" ? "Envoi…" : "Envoyer"}</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe src={appData.mapIframe} title="Localisation de Sédar Group"></iframe>
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
