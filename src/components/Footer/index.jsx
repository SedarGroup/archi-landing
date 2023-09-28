import React from "react";
import Link from "next/link";
import { validateEmail, onCallClick } from "../../utils";
const Footer = ({ classText }) => {
  const [email, setEmail] = React.useState('');
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if (validateEmail(email)){
      fetch(`/.netlify/functions/saveMail?email=${email}`);
      alert("Mail enregistré pour de prochaines newsletters")
    }
}
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contactez nous</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adresse</h6>
                    <p>Liberté 6, en face mosquée</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p><a href="mailto:sedargroup.sn@gmail.com" >
                      sedargroup.sn@gmail.com
                    </a></p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div onClick={onCallClick} className="cont">
                    <h6>Téléphone</h6>
                    <p > <a>+221 76 153 96 35</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Abonnez-vous à la newsletter</h5>
              </div>
              <ul>
                <li>
                  <form className="subscribe">
                    <input type={'email'} onChange={onEmailChange} placeholder="Ecrivez votre mail" />
                    <button type="submit" onClick={onSubmit} className="subs pe-7s-paper-plane"></button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <Link href="https://facebook.com/Sedar-Group-102587235742111/">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link> */}
                <Link href="https://www.instagram.com/sedargroup.sn/?hl=fr">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>
                  © 2022,
                  <Link href="#"> Sedar Group</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
