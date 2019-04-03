import "./assets/stylesheets/styles.scss";

import React from "react"; // import the main react dependency
import ReactDOM from "react-dom"; // import reactDOM
import { Provider } from "react-redux"; // Glue for react and redux
import Store from "./Store"; // redux state store
import App from "./app/App"; // import the main app component

ReactDOM.render(
  <Provider store={Store}>
    {/* Glue for react and redux */}
    <App /> {/* Render out App component */}
  </Provider>,
  document.getElementById("root") // render our App component and mount it to our #root element
);
