import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pptoButtonClick } from '../Actions/pptoAction';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue : '' }
    }

    inputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        const { pptoButtonClick, newValue } = this.props;
        const { inputValue } = this.state;
        return (
            <div className="App" style={{ paddingTop: '10px' }}>
                <input
                    onChange={this.inputChange}
                    type='text'
                    value={inputValue}
                />
                <button onClick={() => pptoButtonClick(this.state.inputValue)}> Click me! </button>
                <h1>{newValue}</h1>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({ newValue: store.pptoState.newValue });

const mapDispatchToProps = (dispatch) => bindActionCreators({ pptoButtonClick }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
