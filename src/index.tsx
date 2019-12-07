import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
// import App from './pages/App/App';
// import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import Home from "./pages/Home/Home";
import {Container} from "reactstrap";

ReactDOM.render(
    <Container fluid={true}>
        <Home/>
    </Container>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
