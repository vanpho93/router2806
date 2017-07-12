import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Private from './Private';

const Public = () => <h1>Public Page</h1>;

class Screen extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/public" component={Public} />
                    <Route 
                        path="/private" 
                        render={() => {
                            if (this.props.isAuthendicated) return <Private />;
                            return <Redirect to="/" />;
                        }}
                    />
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({ isAuthendicated: state.isAuthendicated }); 

export default connect(mapStateToProps)(Screen);
