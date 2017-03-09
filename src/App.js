import React, { Component } from 'react'; 
import Projects from './Components/Projects';
 
 import AddProject from './Components/AddProject'; 
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects:[]
        }
    }

    componentWillMount(){
        this.setState({projects:[
            {
                title: 'MakeList',
                category: 'Personal'
            },
            {
                title: 'Apply',
                category: 'Personal'

            },
            {
                title: 'Learn_React',
                category: 'Technical'
            }
        ]})

    }

    handleAddProject(project){ 
        // console.log(project); 
          let projects = this.state.projects; 
          projects.push(project); 
          this.setState({projects:projects});  
    }
  render() {
    return (
        <div className="App"> 
            <div className="App-header"></div> 
            <div className="container"> 
            <AddProject addProject={this.handleAddProject.bind(this)}/> 
                <Projects projects={this.state.projects} /> 
            </div> 
        </div>
    );
  }
}

export default App;
