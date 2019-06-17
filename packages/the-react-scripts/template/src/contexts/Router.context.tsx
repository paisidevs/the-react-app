import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";

interface IRouterProps {
  children?: React.ReactChild;
}

export const RouterContext = React.createContext({});

const Router: FC<IRouterProps> = ({ children }) => (
  <BrowserRouter>
    <Route>
      {(routeProps) => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

export default Router;
