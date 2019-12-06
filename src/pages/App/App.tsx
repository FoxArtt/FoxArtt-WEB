import React, {Component} from 'react';
import './App.scss';

type props = {};
type state = {};

class App extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App" data-testid="App">
                App Component
            </div>
        );
    }
}

// @ts-ignore
export default App;
