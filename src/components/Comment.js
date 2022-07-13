import React, {Component} from 'react';

class Comment extends Component {

constructor(props) {
    super(props);
}

    render() {
    const {id, body} = this.props.item;
        return (
            <div>
                <b>{id}</b>-{body}
            </div>
        );
    }
}

export default Comment;