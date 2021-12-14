import React from 'react';
import styled from "styled-components";

const MyButton = styled.div`
    width: 100px;
    height: 100px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Button = () => (<MyButton>My Button</MyButton>)
// function Button() {
//     return (<MyButton onClick={() => console.log("click")}>My Button</MyButton>)
// }

export default Button;