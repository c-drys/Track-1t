import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/NavBar.component";
import ExercisesList from "./Components/ExercisesList.component";
import EditExercise from "./Components/ExercisesEdit.component";
import CreateExercise from "./Components/CreateExercise.component";
import CreateUser from "./Components/CreateUser.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
