import React, { Component } from 'react';
import {
        ScrollView,
        StyleSheet,
        View,
        Image,
        Text,
} from 'react-native';
import ProjectCard from '../ProjectCard'


export default class HomeScreen extends Component {
        static navigationOptions = {
                title: 'Covalence Projects'
        }
        constructor(props) {
                super(props)
                this.state = {
                        projects: []
                };
        };
        componentDidMount() {
                this.setState({
                        projects: [
                                { name: 'Test project 1', description: 'Cool Project!!' },
                                { name: 'Test project 2', description: 'Cool Project!!' },
                                { name: 'Test project 3', description: 'Cool Project!!' },
                                { name: 'Test project 4', description: 'Cool Project!!' },
                        ]
                });
        };
        navigate(project){
                this.props.navigation.navigate('ProjectDetail', {project});
                }
        render() {
                return (
                        <ScrollView style={styles.container}>
                                {this.state.projects.map((project, index) => {
                                        return( <ProjectCard key={index} project={project} 
                                        Navigate={ ()=> {this.navigate(project)}}/>)
                                })}
                        </ScrollView>


                )
        }
};

let styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'rgb(4,30,66)' ,

        }
});