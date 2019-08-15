import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
 border: 1px solid #cccccc; 
   border-radius: 3px; 
   -webkit-border-radius: 3px; 
   -moz-border-radius: 3px; 
   -khtml-border-radius: 3px; 
   background: #ffffff !important; 
   outline: none; 
   height: 24px; 
   width: 120px; 
   color: #cccccc; 
   font-size: 11px; 
   font-family: Tahoma; 
`

const Input = (props) =>{
    return (<StyledInput {...props}/>)
}

export default Input;