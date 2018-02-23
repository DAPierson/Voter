import React, { Component } from 'react';
import {
        ScrollView,
        StyleSheet,
        View,
        Image,
        Text,
} from 'react-native';
import ProjectCard from '../ProjectCard'


export default class ProjectScreen extends Component {
        static navigationOptions = {
                title: 'Covalence Projects'
        }
        constructor(props) {
                super(props)
                this.state = {
                        projects: []
                };
        };
        async componentDidMount() {
                let projects = await this.fetchProjects();
                this.setState({ projects });
        }


        async fetchProjects() {
                try {
                        let result = await fetch({ url: 'https://gravity.covalence.io/api/graduation/projects' })
                        let projects = await result.json();
                        return projects
                } catch (e) {
                        console.log(e)
                        return null;
                }
        }

        navigate(project) {
                this.props.navigation.navigate('ProjectTab', { project });
        }
        render() {
                return (
                        <ScrollView style={styles.container}>
                                {this.state.projects.map((project, index) => {
                                        return (<ProjectCard key={index} project={project}
                                                Navigate={() => { this.navigate(project) }} />)
                                })}
                        </ScrollView>
                )
        }
};

let styles = StyleSheet.create({
        container: {
                flex: 1,
                backgroundColor: 'rgb(4,30,66)',

        }
});