import React, {Component} from 'react';
import './BrowserView.scss';
import {
    Col,
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink, Row
} from "reactstrap";
import {Button, Typography} from "@material-ui/core";
import LandingImage from '../../../../../assets/images/Home/backgroundHomeLandingCreate2.svg';

type props = {};
type state = {};

class BrowserView extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="BrowserView" data-testid="BrowserView">
                <Navbar light expand="md" className="p-3 bg-white" fixed="top">
                    <Container>
                        <NavbarBrand href="/">
                            <Typography variant="h5" className="text-swatch">
                                FoxArtt
                            </Typography>
                        </NavbarBrand>
                        <Collapse isOpen={true} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="mr-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Inicio
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="mr-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Servicios
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="mr-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Acerca de nosotros
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="mr-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Equipo
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="mr-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Clientes
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="ml-2 text-swatch text-swatch" href="/">
                                        <Typography variant="h6" color="inherit">
                                            Contáctenos
                                        </Typography>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container className="min-vh-100 d-flex justify-content-center align-items-center">
                    <Row rows={1} cols={2}>
                        <Col cols={6} className="text-center">
                            <object width="450" data={LandingImage} type="image/svg+xml" aria-label='LandingImage'/>
                        </Col>
                        <Col cols={6} className="text-left">
                            <Typography variant="h2" className="text-swatch">
                                We Design & Build Creative Brands
                            </Typography>
                            <br/>
                            <p className="text-swatch" style={{fontSize: "1.5rem"}}>
                                Duis aute irure dolor reprehenderit voluptate velit esse dolore nulla pariatur
                            </p>
                            <br/>
                            <Button color="primary" type="button" size="large">
                                <div className="mt-1 mb-1 mr-4 ml-4">
                                    Aprender Más
                                </div>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BrowserView;
