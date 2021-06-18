import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import {
  SignIn,
  SignUp,
} from "./pages";
import { PrivateRoute } from "./utils/PrivateRoute";
import { WaitingComponent } from "./utils/helper";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/">
          {/* <Landing /> */}
          <SignIn />
        </Route>
        <Route path="/app">
          {/* <App /> */}
          {WaitingComponent(App)}
        </Route>
        {/* <PrivateRoute path="/app" component={WaitingComponent(App)} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
