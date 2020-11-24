import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

import Routes from "./../client/Routes";

export default (req, store, context = {}) => {
  const content = renderToNodeStream(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `
    <html lang="en">
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <link rel="icon" href="favicon.ico" />
    </head>
    <body>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="bundle.js"></script>
    </body>
    </html>
    `;
};
