import React, {Component} from 'react';
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти

class App extends Component {


    render() {
        return (
            <div>
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;