import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mcei58i",
        "template_rs6pe26",
        form.current,
        "user_STsY1VNfnoujzk86WDl0H"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.form.reset();
    setResult(true);

    setTimeout(() => {
      setResult(false);
    }, 5000);
  };

  return (
    <div className="contact component__space" id="contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact me</h1>
              <p className="hire__text">
                Use the form below. Or, for a quicker response, ping me over on{" "}
                {""}
                <a
                  href="https://www.linkedin.com/in/alexander-rasoli-157888218/"
                  target="_blank"
                  className="contactInfo__form">
                  LinkedIn
                </a>
              </p>
              <p className="hire__text">
                Alternatively, shoot me an email at {""}
                <a
                  href="mailto:alexander.r2000@hotmail.com"
                  className="contactInfo__form">
                  alexander.r2000@hotmail.com
                </a>
              </p>
            </div>
            <div className="input__box">
              <form onSubmit={sendEmail} ref={form} name="form">
                <input
                  type="text"
                  name="name"
                  className="contact name"
                  placeholder="Name:"
                  required
                />

                <input
                  type="email"
                  name="email"
                  className="contact email"
                  placeholder="Email:"
                  required
                />

                <input
                  type="text"
                  className="contact subject"
                  placeholder="Subject:"
                  name="subject"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                  required></textarea>

                {result && (
                  <p className="form__response">
                    Your e-mail has been successfully sent. Thank You!
                  </p>
                )}
                <div className="button">
                  <button className="btn contact purpleBtnHover" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
