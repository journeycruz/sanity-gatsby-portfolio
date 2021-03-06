import React from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_8gpom8u", e.target, "user_YR4oY7ZbrSRXqxpG8og64").then(
      result => {
        console.log(result.text);
        alert('Thank you for your email. I will get back to you soon!');
      },
      error => {
        console.log(error.text);
        alert(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div id="contact" className="bg-black m-auto text-center text-white w-full pb-20 px-7">
      <div>
        <div className="">
          <div className="">
            <div className="">
              <h2 className="pt-20 font-semibold text-4xl pb-3">Get in Touch.</h2>
              <p className="contact text-white">Use the form below</p>
              <p className="contact pb-10 text-white"> to send an email.</p>
            </div>
            <div className="text-left max-w-4xl m-auto">
              <form onSubmit={sendEmail}>
                <label htmlFor="item01">
                  Name:
                  <input
                    className="w-full rounded-md p-2 mb-3 text-black"
                    type="text"
                    name="name"
                    id="item01"
                    placeholder="Your Name*"
                  />
                </label>

                <label htmlFor="item02">
                  Email:
                  <input
                    className="w-full rounded-md p-2 mb-3 text-black"
                    type="text"
                    name="email"
                    id="item02"
                    placeholder="Your Email Address*"
                  />
                </label>

                <label htmlFor="item03">
                  Subject:
                  <input
                    className="w-full rounded-md p-2 mb-3 text-black"
                    type="text"
                    name="subject"
                    id="item03"
                    placeholder="Subject"
                  />
                </label>
                <label htmlFor="item04">
                  Message:
                  <textarea
                    className="w-full rounded-md pb-10 p-2 mb-3 text-black"
                    type="text"
                    id="item04"
                    name="message"
                    placeholder="Message*"
                  />
                </label>
                <div className="text-center">
                  <button
                    className="rounded-md bg-purple-600 w-1/5 py-2 mt-2"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
