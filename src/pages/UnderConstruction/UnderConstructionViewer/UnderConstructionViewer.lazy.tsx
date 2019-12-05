import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyUnderConstructionViewer = (props: any) => (React.lazy(() => import('./UnderConstructionViewer').then(({UnderConstructionViewer}) => ({default: UnderConstructionViewer}))));

type props = {};
type state = {};

class UnderConstructionViewer extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyUnderConstructionViewer {...this.props}/></Suspense>);
    }
}

export default UnderConstructionViewer;
