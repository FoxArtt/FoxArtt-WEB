import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyApp = (props: any) => (React.lazy(() => import('./App').then(({App}) => ({default: App}))));

type props = {};
type state = {};

class App extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyApp {...this.props}/></Suspense>);
    }
}

export default App;
