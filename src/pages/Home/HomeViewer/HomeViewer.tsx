import React, {Component} from 'react';
import './HomeViewer.scss';

type props = {};
type state = {};

class HomeViewer extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="HomeViewer" data-testid="HomeViewer">
                HomeViewer Component
            </div>
        );
    }
}

export default HomeViewer;
