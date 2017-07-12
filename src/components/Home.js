import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    onSignIn() {
        this.props.dispatch({ type: 'SIGN_IN' });
    }

    render() {
        return (
            <div>
                <h1>Welcome to my page!</h1>
                <Link to="/public">Go to public page</Link>
                <br /><br />
                <Link to="/private">Go to private page</Link>
                <br />
                <button onClick={this.onSignIn.bind(this)}>Sign In</button>
            </div>
        );
    }
}

export default connect()(Home);
