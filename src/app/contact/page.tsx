"use client"; // This line marks the component as a Client Component

import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> asimr6573@gmail.com</p>
        <p><strong>Phone:</strong> +92 3002351026</p>
        <p><strong>Location:</strong> Karachi, Pakistan</p>
        <p><strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/rizviraza74" target="_blank" rel="noopener">
            <img src="/image/linkedin.jpg" alt="LinkedIn Logo" className="social-icons" />
          </a>
        </p>
        <p><strong>GitHub:</strong> 
          <a href="https://github.com/Raza1974" target="_blank" rel="noopener">
            <img src="/image/gitlogo.jpg" alt="GitHub Logo" className="social-icons" />
          </a>   
        </p>
      </section>
      
      <div>
        <Link href="/">Back to Home</Link>
      </div> 

      <section className="contact-options">
        <h2>Contact Me Through:</h2>
        {/* WhatsApp Contact */}
        <p>
          <a href="https://wa.me/923002351026?text=Hi%20there,%20I%20would%20like%20to%20contact%20you!" target="_blank" rel="noopener">
            Message me on WhatsApp
          </a>
        </p>
        
        {/* Email Link Contact */}
        <p>
          <a href="mailto:asimr6573@gmail.com?subject=Contact%20Form&body=Hi,%20I%20want%20to%20get%20in%20touch%20with%20you.">
            Send me an email
          </a>
        </p>

        {/* Google Form Embed */}
        <h2>Send a Message via Form</h2>
        <div className="form-container">
          <iframe 
            title="Contact Form" 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeI-YourFormID/viewform?embedded=true" 
            width="640" 
            height="480" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}>
            Loading…
          </iframe>

        </div>
      </section>

      <style jsx>{`
        .form-container {
          max-width: 70%;
          margin: 0 auto;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .form-container iframe {
          width: 100%; /* Changed to 100% for responsive design */
          height: 300px;
          border: none;
        }
      `}</style>
    </div>
  );
}
