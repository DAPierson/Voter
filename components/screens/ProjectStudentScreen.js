import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
export default class ProjectStudentScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: []
        }
    }
    async componentDidMount() {
        let teams = await this.fetchStudents(this.props.screenProps.project.id);
        this.setState({ teams });
    
    }
    async fetchStudents(id) {
        try {
            let result = await fetch({ url: `https://gravity.covalence.io/api/graduation/teams/${id}` })
            let teams = await result.json();
            return teams
        } catch (e) {
            console.log(e)
            return null;
        }
    }
    render() {
        return (
            <ScrollView>
                <Text>Students:</Text>
                {this.state.teams.map((team) => {
                    return team.map((student, index) => {
                        return (
                            <View key={index}>
                            <Text >Name: {student.firstname} {student.lastname}</Text>
                            <Text>Email: {student.email}</Text>
                            </View>
                        );
                    });
                })}
            </ScrollView>
        )
    }
}