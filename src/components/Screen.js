import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Welcome to my page!</h1>
        <Link to="/public">Go to public page</Link>
        <br /><br />
        <Link to="/private">Go to private page</Link>
    </div>
);

const Public = () => <h1>Public Page</h1>;
const Private = () => <h1>Private</h1>;

export default class Screen extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/public" component={Public} />
                    <Route path="/private" component={Private} />
                </div>
            </HashRouter>
        );
    }
}
