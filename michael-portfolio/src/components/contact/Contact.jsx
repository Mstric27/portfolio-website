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
    <section id="contact" className="py-5">
      <h2 className="text-primary text-center mb-5">Contact Me</h2>

      {/* Scrunched section wrapper */}
      <div className="container contact__wrapper">
        {/* Contact Form */}
        <div className="mb-5">
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Write your message here..."
              className="form-control"
              required
            />
            <button type="submit" className="btn btn-primary align-self-start">
              {messageSent ? "Message Sent!" : "Send a Message!"}
            </button>
          </form>
        </div>

        {/* Contact Options */}
        <div className="d-flex flex-column gap-3">
          <article className="contact__option">
            <FontAwesomeIcon icon={faEnvelope} className="contact__option-icon" />
            <h4>Email</h4>
            <h6 className="text-light">mpstrickland532@gmail.com</h6>
            <button
              onClick={copyEmail}
              className="copy__button"
            >
              {messageCopied ? "Email Copied to Clipboard!" : "Copy Email"}
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
