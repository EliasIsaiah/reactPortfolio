import React from 'react';
import About from './About';
import axios from 'axios';
import { render } from 'react-dom';


interface Props {
    error?: null | string,
    isLoaded?: boolean,
    repos?: string[],
}

interface MyState {
    error?: null | string,
    isLoaded?: boolean,
    repos?: string[],
}

class Repos extends React.Component<Props, MyState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            repos: ["anything"],
            // testString: "testString"
        };
    }


    componentDidMount() {
        axios.get(`https://api.github.com/users/eliasisaiah/repos`)
            .then(res => {
                const repos = res.data;
                console.log(repos);
                this.setState({
                    isLoaded: true,
                    repos: repos
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (

            <ul>
                {this.state.repos &&
                    this.state.repos.map((repo: any) => (
                        <li key={repo.id}>
                            {repo.name}
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Repos;