import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyHome = (props: any) => (React.lazy(() => import('./Home').then(({Home}) => ({default: Home}))));

type props = {};
type state = {};

class Home extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyHome {...this.props}/></Suspense>);
    }
}

export default Home;
