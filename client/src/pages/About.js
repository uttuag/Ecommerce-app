import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout title={"About us - MERNCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2"></p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
