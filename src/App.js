import React, { Component, Fragment } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Card from "./components/Card";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

class App extends Component {
  render() {
    return (
      <div className="ui ui-header container" style={{ marginTop: "3.2rem" }}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Router>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Fragment>
                      <Header />
                      <Home />
                    </Fragment>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Fragment>
                      <Header />
                      <About />
                    </Fragment>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Fragment>
                      <Header />
                      <Contact />
                    </Fragment>
                  }
                />
                <Route
                  path="/:user"
                  element={
                    <Fragment>
                      <Header />
                      <Card />
                    </Fragment>
                  }
                />
                <Route exact path="/blog" element={<Blog />} />
              </Routes>
            </Router>
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    );
  }
}
export default App;
