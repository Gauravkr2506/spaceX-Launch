import React from "react";
import { Helmet } from "react-helmet";
import { renderRoutes } from "react-router-config";

import Header from "./components/Header";
import Loader from "./components/Loader";
import { fetchCurrentUser } from "./actions/index";

function App({ route }) {
  const head = () => {
    return (
      <Helmet>
        <title>Space X Launches</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Space X Launch App" />
        <meta
          property="og:description"
          content="Here is the data about space x launch, you can filter 
  the data according to date of launch, successful launch and successful landingS"
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
    </div>
  );
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
