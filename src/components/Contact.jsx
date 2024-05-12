import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>

        <h1>Don't be shy! Hit me up!</h1>

        <p className="py-2">
          <span className="font-bold">Email:</span> agarwalsabhya179@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 6397311276
        </p>
      </div>
    </section>
  );
};

export default Contact;
