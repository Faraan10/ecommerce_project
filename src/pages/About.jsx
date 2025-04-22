import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-base-content text-center mb-10">
          Get to know who we are, what we do, and what drives us forward.
        </p>

        <div className="space-y-10">
          <section>
            <h3 className="text-xl text-base-content font-semibold mb-2">
              Who We Are
            </h3>
            <p className="text-base-content leading-relaxed">
              Welcome to{" "}
              <span className="text-primary font-bold">Zayrah.life</span>, your
              one-stop destination for premium clothing and fashion essentials.
              We're a passionate team of designers, developers, and product
              curators dedicated to delivering quality and style at your
              doorstep.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-base-content leading-relaxed">
              To make high-quality, trend-forward products accessible to
              everyone. We aim to bring the latest styles, exceptional service,
              and a seamless shopping experience to every customer.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Why Shop With Us?</h3>
            <ul className="list-disc list-inside text-base-content space-y-1">
              <li>Curated collections of the latest footwear and fashion</li>
              <li>Secure & smooth checkout experience</li>
              <li>Fast shipping and responsive support</li>
              <li>Customer-first return & refund policy</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Join Our Journey</h3>
            <p className="text-base-content leading-relaxed">
              Whether you're here for the style, the comfort, or just the deals
              — we’re glad you found us. Follow us on social media or subscribe
              to our newsletter to stay updated!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
