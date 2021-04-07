import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Home, Chart } from "./";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/" exact>
            <>
              <Home />
            </>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
