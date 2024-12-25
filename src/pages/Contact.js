import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

function Contact({ ref }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("Send Meessage");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message cannot be empty";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    console.log(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setResponseMessage("...Sending");

    emailjs
      .send(
        "service_form_details",
        "template_portfolio",
        formData,
        "mhin_HBZJvjAvVUFW"
      )
      .then((result) => {
        console.log(result.status, result.text);

        setResponseMessage("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

        setResponseMessage("Message Sent Successfully");

        setTimeout(() => {
          setResponseMessage("Send Message");
        }, 3000);
      })
      .catch((err) => {
        console.log("error: ", err);
        setResponseMessage("Failed to send the message.");

        setTimeout((e) => {
          console.log(e);
          setResponseMessage("Resenda Message");
        }, 3000);
      });
  };

  return (
    <div ref={ref} className={styles.contact}>
      <section>
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={styles.input}
              // required
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={styles.input}
              // required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={styles.textarea}
              // required
            ></textarea>
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.btn}>
            {responseMessage && <p>{responseMessage}}</p>}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
