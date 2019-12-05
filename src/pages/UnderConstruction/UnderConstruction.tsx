import React, {Component} from 'react';
import './UnderConstruction.scss';
import {Container} from 'reactstrap';

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
                <Container fluid={true}>
                    <div className="text-white ml-5" id="encabezadoTexto">
                        Sitio en construcción.
                    </div>
                </Container>
            </div>
        );
    }
}

export default UnderConstruction;
