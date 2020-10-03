import React, { Component } from "react";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    // the properties of state will correspond to the fields in the MongoDB document

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  render() {
    return (
      <div>
        <p>You are on the Create Exercise component!</p>
      </div>
    );
  }
}
