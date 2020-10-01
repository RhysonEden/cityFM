import React, { useState } from "react";
import Form from "./calculator";
import Company from "./parts";
import Header from "./Header";
import Admin from "./admin";
import Login from "./Login";
import Footer from "./footer";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [part, setPart] = useState(["0"]);
  const [main, setMain] = useState("");
  let admin = localStorage.getItem("user");

  if (!admin) {
    return (
      <Brouter>
        <div className="App">
          <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            main={main}
            setMain={setMain}
          />
          <Switch>
            <Login
              path="/login"
              exact
              component={Login}
              main={main}
              setMain={setMain}
            />
            <Form
              path="/calculator"
              exact
              component={Form}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
            <Company
              path="/company"
              exact
              component={Company}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
          </Switch>{" "}
          <Footer />
        </div>
      </Brouter>
    );
  } else {
    return (
      <Brouter>
        <div className="App">
          <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            main={main}
            setMain={setMain}
          />
          <Switch>
            <Admin
              path="/"
              exact
              component={Admin}
              main={main}
              setMain={setMain}
            />
            <Form
              path="/calculator"
              exact
              component={Form}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
            <Company
              path="/company"
              exact
              component={Company}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
          </Switch>{" "}
          <Footer />
        </div>
      </Brouter>
    );
  }
};

export default App;
