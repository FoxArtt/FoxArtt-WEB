import React, {Component, lazy, Suspense} from 'react';

// @ts-ignore
const LazyNavbarComponent = (props: any) => (React.lazy(() => import('./NavbarComponent').then(({NavbarComponent}) => ({default: NavbarComponent}))));

type props = {};
type state = {};

class NavbarComponent extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (<Suspense fallback={null}><LazyNavbarComponent {...this.props}/></Suspense>);
    }
}

export default NavbarComponent;
