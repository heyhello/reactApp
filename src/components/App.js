import React, { Component } from "react";
import Button from "./Button";
import Header from "./Header";
import {AppContainer} from "./styled"
import { connect } from 'react-redux'


class App extends Component {
    render() {
        console.log("Button", Button);
        return (
            <AppContainer>
                <h1>My React App!</h1>
                <Button/>
            </AppContainer>
        );
    }
}



export default App;