import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;
const Product = (props) => <h2>{props.match.params.name}</h2>;

export default class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>

                        <Link to="/product/helmet">Helmet</Link>
                        <Link to="/product/jeans">Jeans</Link>
                        <Link to="/product/skirt">Skirt</Link>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/product/:name" component={Product} />
                </div>
            </HashRouter>
        );
    }
}
