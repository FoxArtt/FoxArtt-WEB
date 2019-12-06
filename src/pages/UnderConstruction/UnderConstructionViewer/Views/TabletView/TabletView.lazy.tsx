import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyTabletView = (props: any) => (React.lazy(() => import('./TabletView').then(({TabletView}) => ({default: TabletView}))));

type props = {};
type state = {};

class TabletView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyTabletView {...this.props}/></Suspense>);
    }
}

export default TabletView;
