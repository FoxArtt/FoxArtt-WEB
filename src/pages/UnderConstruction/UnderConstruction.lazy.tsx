import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyUnderConstruction = (props: any) => (React.lazy(() => import('./UnderConstruction').then(({UnderConstruction}) => ({default: UnderConstruction}))));

type props = {};
type state = {};

class UnderConstruction extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyUnderConstruction {...this.props}/></Suspense>);
    }
}

export default UnderConstruction;
