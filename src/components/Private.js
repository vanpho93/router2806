import React, { Component } from 'react';
import { connect } from 'react-redux';

class Private extends Component {
    onSignOut() {
        this.props.dispatch({ type: 'SIGN_OUT' });
    }
    render() {
        return (
            <div>
                <h2>Private Component</h2>
                <button onClick={this.onSignOut.bind(this)}>Sign Out</button>
            </div>
        );
    }
}

export default connect()(Private);
