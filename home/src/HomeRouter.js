import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeApp from './HomeApp';
import PhotosApp from './PhotosApp';

const HomeRouter = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomeApp} />
      <Route path="/photos" component={PhotosApp} />
    </React.Fragment>
  </Router>
);

export default HomeRouter;