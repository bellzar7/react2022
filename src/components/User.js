import React, {Component} from 'react';
import {clear} from "@testing-library/user-event/dist/clear";
import Some from "./Some";

class User extends Component {

    constructor(props) {
        super(props);
        this.xxx = this.props.item
        this.id = 0;
    }

    componentDidMount() {
        console.log('mount');
        // this.id = setInterval(() => {
        //         console.log('interval', this.xxx.id)
        //     }, 1000);

    }

    componentWillUnmount() {
        console.log('unmount');
        // clearInterval(this.id)
    }

    render() {
        return (
            <div>
                <Some/>
                {this.xxx.id} {this.xxx.name}
            </div>
        );
    }
}

export default User;