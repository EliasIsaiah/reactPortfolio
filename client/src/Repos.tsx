import React from 'react';
import About from './About';
import axios from 'axios';
import { render } from 'react-dom';

interface Props {
    error?: string,
    isLoaded?: boolean,
    repos?: string[],
}

class Repos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            repos: []
        };
    }
}

// componentDidMount() {
    axios.get(`https://api.github.com/users/eliasisaiah/repos`)
        .then(res => {
            const repos = res.data;
            console.log(repos);
        })
// }

render() {
    return (
        <ul>
            {this.StaticRange.repos.map(repo => <li>{repo.name}</li>)}
        </ul>
    )
}