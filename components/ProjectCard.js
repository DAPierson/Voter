import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';

export default class ProjectCard extends Component{


    render(){
        return(
            <Card featuredTitleStyle={{color:'white'}} containerStyle={{backgroundColor: 'rgb(255,184,28)'}}featuredTitle={this.props.project.name}
            image={require('./imgs/preds.png')}>
            <Button color="white" backgroundColor="rgb(4,30,66)"title="View Project" 
            onPress={ this.props.Navigate}/>
            </Card>
        )
    }
}