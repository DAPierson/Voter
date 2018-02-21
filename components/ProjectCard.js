import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';

export default class ProjectCard extends Component{


    render(){
        return(
            <Card featuredTitle={this.props.project.name}
            image={require('./imgs/preds.png')}>
            <Button backgroundColor="gold"title="View Project" 
            onPress={ this.props.Navigate}/>
            </Card>
        )
    }
}