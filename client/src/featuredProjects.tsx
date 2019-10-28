import React from 'react';
import axios from 'axios';


interface Props {
    error?: null | string,
    isLoaded?: boolean,
    repos?: string[],
}

interface FeaturedProject {

}

interface MyState {
    error?: null | string,
    isLoaded?: boolean,
    repos?: string[],
}

class featuredProjects extends React.Component<Props, MyState> {
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
                {this.state.featuredProjects &&
                    this.state.featuredProjects.map((featuredProject: any) => (
                        <li key={featuredProject.id}>
                            {featuredProject.name}
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default featuredProjects;