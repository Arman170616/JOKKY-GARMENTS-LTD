import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        <strong>Factory Address:</strong><br />
        M-4/5, Mirpur Industrial Area, Mirpur-14 Dhaka - 1206, Bangladesh<br />
        Email: <a href="mailto:info@jokkygarments.com">info@jokkygarments.com</a><br />
        Website: <a href="https://www.jokkybd.com" target="_blank" rel="noopener noreferrer">www.jokkybd.com</a><br />
        Cell: <a href="tel:+8809610996678">+880 9610-996678</a>
      </p>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.7364374795894!2d90.35114501445442!3d23.81421928456365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1498b64982f%3A0x1b3bf7aab0d21b2b!2sMirpur%20Industrial%20Area!5e0!3m2!1sen!2sbd!4v1693651402955!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
