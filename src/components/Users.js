import React, {Component} from 'react';
import {UserApiService} from "../services/user.api.service";
import User from "./User";

class Users extends Component {

    //useState -> state
    state = {users: []}


    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // useEffect
    componentDidMount() {
        console.log('componentDidMount')
        this.userApiService = new UserApiService();

        // this.userApiService.getUsers().then(value => this.setState({...this.state, users: value}));

        // setUsers() -> this.setState(newObj)
        this.userApiService.getUsers().then(value => this.setState({users: value}));

    }

    // return -> render
    render() {
        console.log('render');
        return (
            <div>
                {this.state.users.map(value => <User key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Users;