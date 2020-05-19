import React, { Component } from "react";
import Persons from "../Componets/Persons/Persons";
import Header from "../Componets/Header/header";
import WithClass from "../HOC/WithClass";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      { id: "abvcf", name: "Zoe", age: 28 },
      { id: "ldkdtg", name: "Lili", age: 23 },
      { id: "izrtbv", name: "Neli", age: 23 },
    ],
    showHidePersons: "false",
  };

// componentWillMount() {
//   console.log("[App.js] Component WillMount")
// }

  componentDidMount() {
    console.log("[App.js] Component DidMount Http Req")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] Component DidUpdate")
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: "abvcf", name: "Zaturnin", age: 28 },
        { id: "ldkdtg", name: "Melorin", age: 23 },
        { id: "izrtbv", name: "Isabella", age: 23 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  hidePersons = () => {
    const doesShow = this.state.showHidePersons;
    this.setState({
      showHidePersons: !doesShow,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log("[App.js] render")
    let persons = null;

    if (this.state.showHidePersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          change={this.nameChangeHandler}
        /> 
    }

    return (
      <div className="App">
        <Header
          switchName={this.switchNameHandler}
          hidePer={this.hidePersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
