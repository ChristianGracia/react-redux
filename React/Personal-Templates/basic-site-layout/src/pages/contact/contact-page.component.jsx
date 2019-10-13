import React from "react";
import "./contact-page.styles.scss";

const ContactPage = () => (
  <div>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Whether you are interested in our services or want to schedule an
        appointment, lets talk about facial aesthetics!
      </p>

      <span>
        <a href="tel:508-285-9333">Phone: (508) 285-9333</a>
      </span>
      <span>
        <a href="mailto: office@adcofnorton.com">
          Email: office@adcofnorton.com <i className="fas fa-envelope"></i>
        </a>
      </span>
      <span>
        <a
          className="social"
          href="https://www.facebook.com/AdvancedDentalCareofNorton/"
        >
          Facebook <i className="fab fa-facebook"></i>
        </a>
      </span>
      <span>
        <a className="social" href="https://www.instagram.com/adc_of_norton/">
          Instagram <i className="fab fa-instagram"></i>
        </a>
      </span>
      <span>
        <a className="social" href="https://twitter.com/DrAlvaroGracia">
          Twitter <i className="fab fa-twitter"></i>
        </a>
      </span>
      <span>
        <a href="https://www.google.com/maps/place/Advanced+Dental+Care+of+Norton/@41.9615083,-71.2001785,17z/data=!3m1!4b1!4m5!3m4!1s0x89e461d156c36c9f:0xb5fcf264919e17a5!8m2!3d41.9615083!4d-71.1979898">
          Address: Advanced Dental Care of Norton, 100 West Main Street, Norton
          MA, 02766
        </a>
      </span>
      <div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11867.222853587416!2d-71.19799!3d41.961508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e461d6ac272aed%3A0x56c159b306208cf1!2s100%20W%20Main%20St%2C%20Norton%2C%20MA%2002766!5e0!3m2!1sen!2sus!4v1570728201846!5m2!1sen!2sus"
          width="400"
          height="300"
          frameBorder="0"
          style={{ border: 0, maxWidth: "90%", marginTop: 30 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  </div>
);
export default ContactPage;
