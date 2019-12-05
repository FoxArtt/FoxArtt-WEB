import React, {Component} from 'react';
import './BrowserView.scss';

type props = {};
type state = {};

class BrowserView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="BrowserView" data-testid="BrowserView">
                BrowserView Component
            </div>
        );
    }
}

export default BrowserView;
