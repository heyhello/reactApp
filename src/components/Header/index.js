import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import NavigationItem from "./NavigationItem"

const StyledHeader = styled.div`
  background-color: #fff; 
    width: 100%;
    height: 70px
`
const StyledNavigationBar = styled.ul`
width: 70%;
height: 100%;
display: flex;

`
const Header = (props) => {

    const {headerItems = []} = props;
    return <StyledHeader> 
    <StyledNavigationBar>
        {headerItems.map((it, index) => {
            return (
                <NavigationItem key={index}>
                    {it}
                </NavigationItem>
            )

        })}
    </StyledNavigationBar>
     </StyledHeader> 
}

const mapStateToProps = state => {
    const {headerItems} = state;
    return {
        headerItems
    }
}

export default connect(mapStateToProps)(Header);