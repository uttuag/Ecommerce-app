import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "MERNCart app-shop now",
  description: "Mern Stack Project",
  keywords: "Mern,React,Node,Mongodb",
  author: "Utkarsh",
};
export default Layout;
