import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import chatbot from "./chatbot";
import "./App.css"
// import "./Chatbot.css";

function App() {
  return (
        <Container-fluid
      className="d-flex"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "100%" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Login} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/chatbot" component={chatbot}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container-fluid>

    // </div>

  );
}

export default App;