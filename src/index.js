import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
