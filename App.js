

import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h3",{id:"heading"},"Jaikishan");

// const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)

console.log(heading)

// JSX => React.CreateElement(object) ==> Render ==> HTML Element
     // JSX code is converted into ReactElemnt Code By using Babel 
     // js compiler or transplier. And that React code is rendered on the DOM and 
     // it becomes an HTML Element.

     const JsxHeading = (<h1>
        Its all about JSX
        </h1>)

        // It is mandatatory to use paranthesis in multiple lines
        // jsx code. Not Necessary in a single line of jsx code.

     const root = ReactDOM.createRoot(document.getElementById("root"))

     root.render(JsxHeading)

     // React Functional component 

     const headingComponent  = ()=> <h1>It is Namaste react Course</h1>

     const headingComponent2 = () =>{
      return <h1>It is Namaste React Course</h1>
     }