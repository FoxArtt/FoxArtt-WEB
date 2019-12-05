import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyBrowserView = (props: any) => (React.lazy(() => import('./BrowserView').then(({BrowserView}) => ({default: BrowserView}))));

type props = {};
type state = {};

class BrowserView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyBrowserView {...this.props}/></Suspense>);
    }
}

export default BrowserView;
