import React, {Component} from 'react';
import './BrowserView.scss';
import {Col, Container, Row} from "reactstrap";
import {Button, Typography} from "@material-ui/core";
import LandingImage from '../../../../../assets/images/Home/backgroundHomeLandingCreate.svg';
import NavbarComponent from "../../../../../components/NavbarComponent/NavbarComponent";

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
                <NavbarComponent/>
                <section className="min-vh-100 d-flex justify-content-center align-items-center">
                    <Container>
                        <Row rows={1} cols={2}>
                            <Col cols={6} className="text-center animated fadeInLeft">
                                <object width="450" data={LandingImage} type="image/svg+xml" aria-label='LandingImage'/>
                            </Col>
                            <Col cols={6} className="text-left animated fadeInRight">
                                <Typography variant="h2" className="text-swatch">
                                    We Design & Build Creative Brands
                                </Typography>
                                <br/>
                                <p className="text-swatch" style={{fontSize: "1.5rem"}}>
                                    Duis aute irure dolor reprehenderit voluptate velit esse dolore nulla pariatur
                                </p>
                                <br/>
                                <Button variant="contained" type="button" size="large"
                                        className="bg-custom-primary text-white">
                                    <div className="mt-2 mb-1 mr-3 ml-3">
                                        Aprender Más
                                    </div>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="min-vh-100 d-flex justify-content-center align-items-center">
                    <Container>

                    </Container>
                </section>
            </div>
        );
    }
}

export default BrowserView;
