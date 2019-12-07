import React, {Component} from 'react';
import './NavbarComponent.scss';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {Typography} from "@material-ui/core";

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
                <Navbar light expand="md" className="p-3 bg-white animated fadeInDown" fixed="top">
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
            </div>
        );
    }
}

export default NavbarComponent;
