import React, {Component} from 'react';
import './UnderConstructionViewer.scss';

type props = {};
type state = {};

class UnderConstructionViewer extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="UnderConstructionViewer" data-testid="UnderConstructionViewer">
                UnderConstructionViewer Component
            </div>
        );
    }
}

export default UnderConstructionViewer;
