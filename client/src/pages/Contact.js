import React from "react";
import Layout from "../components/layout";
import { BiLogoGmail, BiPhone, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and information about product feel free to call anytime we
            are available 24X7.
          </p>
          <p className="mt-3">
            <BiLogoGmail /> : www.help@merncart.com
          </p>
          <p className="mt-3">
            <BiPhone /> : 0581-776868
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
