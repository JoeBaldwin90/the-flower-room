import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Router from "./layout/Router.js";
import Site from "./layout/Site";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="The Flower Room - Barnes"
      meta={[
        {
          name: "description",
          content:
            "The Flower Room Barnes"
        },
        {
          name: "keywords",
          content: "flower shop, barnes, delivery, flower, flowers, the flower room"
        }
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.4/js/all.js" }
      ]}
      link={[
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }
      ]}
    />
    <Header />
    <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
