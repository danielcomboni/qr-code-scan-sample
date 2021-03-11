
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../components/home/HomePage";
import ScanQRCode from "../components/scan/ScanQRCode";
import TransferForm from "../components/transfers/TransferForm";

export const history = createBrowserHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/transfer-form">
            <TransferForm />
          </Route>

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
