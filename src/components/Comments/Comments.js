import React, {Component} from 'react';
import {commentsService} from "../../services";
import Comment from "../Comment";

class Comments extends Component {

constructor(props) {
    super(props);
    this.state = {comments: []}
}
    componentDidMount() {
    commentsService.getAll().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(value=> <Comment key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Comments;