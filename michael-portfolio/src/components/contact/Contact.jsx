import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [messageCopied, setmessageCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mpstrickland532@gmail.com");
    setmessageCopied(true);
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    try {
      await emailjs.sendForm(
        "service_7zpil9e",
        "template_2m2ogtd",
        form.current,
        "l5XIifg-V4pP2eFat"
      );
      form.current.reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("EmailJS could not send the contact message:", error);
      setSubmissionStatus("error");
    }
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
            <button
              type="submit"
              className="btn btn-primary align-self-start"
              disabled={submissionStatus === "sending"}
            >
              {submissionStatus === "sending"
                ? "Sending..."
                : submissionStatus === "success"
                  ? "Signal sent"
                  : "Send a signal"}
              <span aria-hidden="true"> ↗</span>
            </button>
            {submissionStatus === "success" && (
              <p className="contact__status contact__status--success" role="status">
                Your message was sent.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="contact__status contact__status--error" role="alert">
                Your message could not be sent. Please email me directly at{" "}
                <a href="mailto:mpstrickland532@gmail.com">
                  mpstrickland532@gmail.com
                </a>
                .
              </p>
            )}
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
