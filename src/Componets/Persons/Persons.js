import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message: "Snapshot"}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Perosns.js] componetDidUpdate");
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }

  render() {
    console.log("[PersonSSS.js] rendering...");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.change(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
