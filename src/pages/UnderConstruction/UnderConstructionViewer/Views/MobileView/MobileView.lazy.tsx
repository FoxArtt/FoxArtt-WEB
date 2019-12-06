import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyMobileView = (props: any) => (React.lazy(() => import('./MobileView').then(({MobileView}) => ({default: MobileView}))));

type props = {};
type state = {};

class MobileView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyMobileView {...this.props}/></Suspense>);
    }
}

export default MobileView;
