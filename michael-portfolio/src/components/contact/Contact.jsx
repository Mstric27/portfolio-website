import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [messageCopied, setmessageCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mpstrickland532@gmail.com");
    setmessageCopied(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7zpil9e",
        "template_2m2ogtd",
        form.current,
        "l5XIifg-V4pP2eFat"
      )
      .then(
        (result) => {
          form.current.reset();
          setMessageSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">05 / Make contact</p>
        <h2 className="section-heading">Have a good problem?</h2>
        <p className="section-intro">
          I’m always interested in thoughtful teams and challenging work. Send a signal.
        </p>
      </div>

      <div className="container contact__wrapper">
        <div className="mb-5">
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3">
            <label className="contact__label" htmlFor="contact-name">YOUR NAME</label>
            <input
              type="text"
              name="name"
              id="contact-name"
              placeholder="How should I address you?"
              className="form-control"
              required
            />
            <label className="contact__label" htmlFor="contact-email">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              id="contact-email"
              placeholder="Where can I reach you?"
              className="form-control"
              required
            />
            <label className="contact__label" htmlFor="contact-message">MESSAGE</label>
            <textarea
              name="message"
              id="contact-message"
              rows="7"
              placeholder="Tell me what you're working on..."
              className="form-control"
              required
            />
            <button type="submit" className="btn btn-primary align-self-start">
              {messageSent ? "Signal received" : "Send a signal"}
              <span aria-hidden="true"> ↗</span>
            </button>
            <span className="visually-hidden" aria-live="polite">
              {messageSent ? "Your message has been sent." : ""}
            </span>
          </form>
        </div>

        <div className="d-flex flex-column gap-3">
          <article className="contact__option">
            <div className="contact__icon-wrap">
              <FontAwesomeIcon icon={faEnvelope} className="contact__option-icon" />
            </div>
            <p className="section-kicker">PREFERRED FREQUENCY</p>
            <h4>Email</h4>
            <a className="contact__email" href="mailto:mpstrickland532@gmail.com">
              mpstrickland532@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="copy__button"
              type="button"
            >
              {messageCopied ? "Copied to clipboard ✓" : "Copy email address"}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
