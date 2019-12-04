
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './UnderConstruction.scss';

type props = {};
type state = {};

class UnderConstruction extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="UnderConstruction" data-testid="UnderConstruction">
                UnderConstruction Component
            </div>
        );
    }
}

export default UnderConstruction;
