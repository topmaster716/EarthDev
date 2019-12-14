import React from "react";
import ReactDOM from "react-dom";
import { Button as MuiButton, StylesProvider  } from '@material-ui/core'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  &:before {
    content: 'shit '
  }
`

const Button = styled(MuiButton)`
  color: ${props => props.color};
`

const SpecificButton = styled(Button)`

`

import "./styles.css";

function App() {
    return (
        <StylesProvider injectFirst>
            <div className="App">
                <Title>Hello CodeSandbox</Title>
                <h2>Start editing to see some magic happen!</h2>
                <Button variant="outlined" color="#666">asd</Button>
            </div>
        </StylesProvider>
    );
}

const rootElement = document.getElementById("root");

