import React, { Component } from 'react';
import Projects from './Components/Projects';

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
  render() {
    return (
      <div className="App">
         My APP
          <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
