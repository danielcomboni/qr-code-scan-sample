// import React from "react";
// import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
// // import { Link, Route, Switch } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import HomePage from "../components/home/HomePage";

// export const history = createBrowserHistory();

// // Instead of BrowserRouter, we use the regular router,
// // but we pass in a customer history to it.
// const AppRouter = () => (
//   // <Router history={history}>
//   //   <div>
//   //     <Switch>
//   //       <Route path="/" component={HomePage} />
//   //     </Switch>
//   //   </div>
//   // </Router>
//   <Router history={history}>
//     <div>
//       <Switch>
//         <Route path="/" component={HomePage} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default AppRouter;



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";// import { Link, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../components/home/HomePage";
import TestPage from "../components/home/TestPage";
import ScanQRCode from "../components/scan/ScanQRCode";

export const history = createBrowserHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Applications</Link>
            </li>
            <li>
              <Link to="/scan">Scan QR code</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/scan">
            <ScanQRCode />
          </Route>
         
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default AppRouter;
