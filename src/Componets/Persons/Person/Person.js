import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...")
    return(
      <div className="Person">
        <h4 >I am {this.props.name} with {this.props.age} years old </h4>
        <button onClick={this.props.click}>Click for Delete</button>
         <p>{this.props.children}</p>
         <input type="text" onChange={this.props.change}  value={this.props.name}/>
      </div >
    )
  }

}

export default Person;