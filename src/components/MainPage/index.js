import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";
import { connect } from 'react-redux';

const MainPageContainer = styled.div`
width: 100%;
height: 100%;
background-color: #C0C0C0;
`

class MainPage extends Component {
    render() {
        return (
           <MainPageContainer>
                <Header/>
           </MainPageContainer>
        );
    }
}



export default MainPage;