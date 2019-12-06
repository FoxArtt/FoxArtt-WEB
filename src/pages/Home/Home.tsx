import React, {Component} from 'react';
import './Home.scss';

type props = {};
type state = {};

class Home extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="Home" data-testid="Home">
                Home Component
            </div>
        );
    }
}

export default Home;
