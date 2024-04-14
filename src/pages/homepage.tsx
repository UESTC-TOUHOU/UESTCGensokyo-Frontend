import React from "react";
import { Component } from "react";


class Homepage extends Component {
    constructor(props: any) {
        super(props);
        this.state = { apiResponse: "" };
        }

    homepage() {
        return (
            <div>
                <h1>Homepage</h1>
            </div>
        );
    }

    render() {
        return (this.homepage());
    }
}

export default Homepage;