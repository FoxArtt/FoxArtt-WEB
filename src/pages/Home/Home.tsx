import React, {Component} from 'react';
import './Home.scss';
import HomeViewer from "./HomeViewer/HomeViewer";

type props = {};
type state = {};

class Home extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <HomeViewer/>
        );
    }
}

// @ts-ignore
export default Home;