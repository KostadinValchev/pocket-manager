import { Route } from "react-router-dom";

export const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return (
      <Route
        path={prop.path}
        render={(props) => <prop.component {...props} />}
        key={key}
      />
    );
  });
};
