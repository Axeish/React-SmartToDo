import React, { Component } from 'react'; 
import Projects from './Components/Projects'; 
import uuid from 'uuid'; 
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
                id:uuid.v4(),
                title: 'MakeList', 
                category: 'Personal' 
            },  { 
                id:uuid.v4(), 
                title: 'Apply', 
                category: 'Personal'  
            },  { 
                id:uuid.v4(), 
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
    }       handleDeleteProject(id){ 
    let projects = this.state.projects; 
    let index = projects.findIndex(x =>x.id === id); 
    projects.splice(index,1); 
    this.setState({projects:projects}); 
}     render() { 
        return ( 
            <div className="App"> 
                <div className="App-header">
                    <h3>TO-DO LIST </h3>
                    React is Awesome
                </div> 
                <div className="container"> 
                    <AddProject addProject={this.handleAddProject.bind(this)}/> 
                    <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/> 
                </div> 
            </div> 
        ); 
    } }  

    export default App; 
