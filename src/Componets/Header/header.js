import React, { useEffect } from "react";
import "./header.css";

const header = (props) => {
  useEffect(() => {
    console.log("[Header.js] useEffect  (componentDidMount + ComponentDidUpdate)")
    // alert("person cahnged")
  }, [])

  console.log("[Headre.js]")
  return(
    <div >
     <section className="AppHeader">
          <h1 className="App-title">I Am A REACT App DEVELOPED BY ZOe800</h1>
          <h3>this area is App Component</h3>
          <button onClick={props.switchName} className="btn">
            Switch Name
          </button>
          <button onClick={props.hidePer} className="btn">
            Hide User
          </button>
        </section>
    </div>
  )
  }



export default header;