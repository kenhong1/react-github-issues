import React from "react"; 

const IssuesShow = (props) => {
   let issue = props.issues.find((issue) => {
      return issue.id === parseInt(props.match.params.id)
   })
   // console.log('props are', props)
   // console.log(props.match)

   
   if(issue) {
      return(
         <div>
            <h3> {issue.id} </h3>
            <h2> {issue.title}</h2>
            <p> {issue.body}</p>
         </div>
      )
      } else {
         return (
            <h1>laoding</h1>
         )
      }

}





export default IssuesShow; 
