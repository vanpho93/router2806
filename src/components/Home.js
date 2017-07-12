import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to my page!</h1>
                <Link to="/public">Go to public page</Link>
                <br /><br />
                <Link to="/private">Go to private page</Link>
            </div>
        );
    }
}
