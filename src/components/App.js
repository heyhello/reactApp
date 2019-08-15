import React, { Component } from "react";
import Button from "./Button";
import Header from "./Header";
import {AppContainer} from "./styled";
import { connect } from 'react-redux';
import StyledInput from "./Input";

class App extends Component {
    render() {

        return (
            <AppContainer>
                <h1>My React App!</h1>
                <Button />
                <StyledInput/>
            </AppContainer>
        );
    }
}



export default App;