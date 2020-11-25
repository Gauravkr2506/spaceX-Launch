import React from "react";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App({ route }) {
  const head = () => {
    return (
      <Helmet>
        <title>Space X Launches</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Space X Launch App" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="Description"
          content="Here is the data about space x launch, you can filter 
  the data according to date of launch, successful launch and successful landings"
        ></meta>
        <meta
          property="og:description"
          content="Here is the data about space x launch, you can filter 
  the data according to date of launch, successful launch and successful landings"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
    );
  };
  return (
    <div className="wrapper">
      {head()}
      <Header />
      <Loader />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

export default {
  component: App,
};
