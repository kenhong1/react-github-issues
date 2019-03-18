import React, { Component } from 'react';
import Home from "./Home"; 
import Issues from "./Issues"
import axios from "axios";
import {BrowserRouter, Route, Link} from "react-router-dom"
import './App.css';
import IssuesShow from './IssuesShow';



class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      github: []
    }
  }

  componentDidMount() {
    let githubApi = "https://api.github.com/repos/facebook/react/issues?page=1&per_page=100"
    axios.get(githubApi).then(response => {
      // console.log(response)
        this.setState({
          github: response.data,
        })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      
        <nav>
          <Link to ="/"> Home </Link> 
        </nav>
          <Link to ="/Issues"><button>Issues Page </button></Link>  
          <Route exact path = "/" component= {Home} /> 
          <Route exact path = "/Issues" render={() => <Issues issues={this.state.github} />} /> 
          <Route path= "/Issue/:id" render={(props) => <IssuesShow issues={this.state.github} {...props} /> }/>  
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
