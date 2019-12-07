import React, {Component} from 'react';
import './NavbarComponent.scss';

type props = {};
type state = {};

class NavbarComponent extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="NavbarComponent" data-testid="NavbarComponent">
                NavbarComponent Component
            </div>
        );
    }
}

export default NavbarComponent;
