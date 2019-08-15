import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  color: #fff; 
  text-decoration: none;
  user-select: none; 
  background: rgb(212,75,56);
  padding: .7em 1.5em; 
  outline: none; 

  &:hover{background: rgb(232,95,76);}
  &:active{background: rgb(152,15,0);}
`

const Button = (props) =>{
    return (<StyledButton {...props}/>)
}

export default Button;