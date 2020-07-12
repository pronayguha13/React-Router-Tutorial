import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/HomePage";
import ItemDetails from "./Components/itemDetail";
import { LoginContext } from "./context/LoginProvider";

export const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute path="/about" component={About} />
      <PrivateRoute path="/shop" exact component={Shop} />
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/shop/:id" component={ItemDetails} />
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    ></Route>
  );
};

export default Routes;
