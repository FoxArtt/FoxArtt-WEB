import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyHomeViewer = (props: any) => (React.lazy(() => import('./HomeViewer').then(({HomeViewer}) => ({default: HomeViewer}))));

type props = {};
type state = {};

class HomeViewer extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyHomeViewer {...this.props}/></Suspense>);
    }
}

export default HomeViewer;
