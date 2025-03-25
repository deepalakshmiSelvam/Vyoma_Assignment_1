import React, { useState } from "react";
import "../css/enquiry.css";

const EnquiryForm = () => {
  // 1. Initializing the state variable
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // 3. Onchange Event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // 4. Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form_container">
      {submitted ? (
        <p>Thank you! We will get back to you soon.</p>
      ) : (
        <div className="form_wrapper">
          <h1>Make an Enquiry</h1>
          <form>
            {/* 2. Passing the name and value prop to the input fields */}
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Message</label>
            <input
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit Enquiry</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
