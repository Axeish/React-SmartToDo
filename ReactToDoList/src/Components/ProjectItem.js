import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class ProjectItem extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        return (

            <li className="Projects">
                <Button title="X" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</Button>
                <strong> {this.props.project.title}</strong>-{this.props.project.category}

            </li>
        );
    }
}

export default ProjectItem;
