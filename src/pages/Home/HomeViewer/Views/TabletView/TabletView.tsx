import React, {Component} from 'react';
import './TabletView.scss';

type props = {};
type state = {};

class TabletView extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="TabletView" data-testid="TabletView">
                TabletView Component
            </div>
        );
    }
}

export default TabletView;
