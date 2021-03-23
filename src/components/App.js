import React from "react";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
