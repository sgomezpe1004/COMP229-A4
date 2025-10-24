import React from 'react';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been captured. Redirecting to Home Page...");
    window.location.href = "/"; // redirect to home page
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#2c2c3e',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    color: '#f0f0f5',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center'
  };

  const panelBodyStyle = {
    fontSize: '1.2em',
    padding: '15px',
    backgroundColor: '#3b3b58',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: '10px',
    marginBottom: '15px',
    transition: 'transform 0.2s, backgroundColor 0.2s'
  };

  const labelStyle = { color: '#ffcc00', display: 'block', marginBottom: '5px', textAlign: 'left' };
  const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: 'none', fontSize: '1em' };
  const buttonStyle = { backgroundColor: '#ffcc00', color: '#1e1e2f', border: 'none', padding: '10px 20px', fontSize: '1.1em', borderRadius: '8px', cursor: 'pointer', transition: '0.2s' };

  return (
    <div style={containerStyle}>
      <h2>Contact Me</h2>

      <div style={panelBodyStyle}>Email: simongomezpetro1004@gmail.com</div>
      <div style={panelBodyStyle}>Phone: (437) 388 - 1761</div>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="firstName">First Name</label>
        <input style={inputStyle} type="text" id="firstName" name="firstName" required />

        <label style={labelStyle} htmlFor="lastName">Last Name</label>
        <input style={inputStyle} type="text" id="lastName" name="lastName" required />

        <label style={labelStyle} htmlFor="contactNumber">Contact Number</label>
        <input style={inputStyle} type="tel" id="contactNumber" name="contactNumber" required />

        <label style={labelStyle} htmlFor="email">Email Address</label>
        <input style={inputStyle} type="email" id="email" name="email" required />

        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea style={inputStyle} id="message" name="message" rows="5" required></textarea>

        <button style={buttonStyle} type="submit">Send Message</button>
      </form>
    </div>
  );
}
