import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-base-content mb-10 text-center">
          Have questions, feedback or need help? Fill out the form below and
          we'll get back to you shortly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                className="textarea textarea-bordered w-full bg-base-200 border-base-300 text-base-content"
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Store Address</h3>
              <p className="text-base-content">
                Beside Trendset Mall, MG Road, Labbipet, Vijayawada - 520002,
                Andhra Pradesh, India
                <br />
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-base-content">Email: support@zayrah.com</p>
              <p className="text-base-content">Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-base-content">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-base-content">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
