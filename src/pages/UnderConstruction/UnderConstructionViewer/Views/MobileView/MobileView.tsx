import React, {Component} from 'react';
import './MobileView.scss';

type props = {};
type state = {};

class MobileView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="MobileView" data-testid="MobileView">
                MobileView Component
            </div>
        );
    }
}

export default MobileView;
