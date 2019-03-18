import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"




const Issues = (props) => {
      // console.log('props is', props)
      const issues = props.issues.map((issue, index) => (
            <div key={index}>
               <h3> <Link to={`/Issue/${issue.id}`}> link</Link> {issue.id} {" "} {issue.title}  </h3>
               <p>  {issue.body}  </p>
            </div>
         ))
   return (
         <div className="App">
         <h1> Issues Page </h1>
            {issues}
         </div>
      );
}





export default Issues;
