import React, { Component } from "react";
import styled from "styled-components";

const StyledNavigationItem = styled.li`
    background-color: #DEDDDD;
    height: 50%;
    width: 10%;
`

const NavigationItem = (props) =>{
    return (<StyledNavigationItem {...props}/>)
}

export default NavigationItem;