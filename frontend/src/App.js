import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddReviews from "./components/AddReviews";
import Restaurant from "./components/Restaurant";
import RestaurantsList from "./components/RestaurantsList";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="/restaurants">
            Restaurants Review
          </a>
          <div class="navbar-nav mr-auto">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to={"/restaurants"}>
                  Restaurants
                </Link>
              </li>
              <li class="nav-item">
                {user ? (
                  <a
                    onClick={() => logout}
                    style={{
                      cursor: "pointer",
                    }}
                    className="nav-link"
                  >
                    Logout {user.name}
                  </a>
                ) : (
                  <Link class="nav-link" to={"/login"}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route
              exact
              path={["/", "/restaurants"]}
              component={RestaurantsList}
            />
            <Route
              path="/restaurants/:id/review"
              render={(props) => <AddReviews {...props} user={user} />}
            />
            <Route
              path="/restaurants/:id"
              render={(props) => <Restaurant {...props} user={user} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
