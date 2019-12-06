import React, {Component} from 'react';
import './MobileView.scss';
import {Col, Container, Row} from "reactstrap";

type props = { tiempoRestante: tiempo };
type state = { tiempoRestante: tiempo };
type tiempo = {
    dias: number,
    horas: string,
    minutos: string,
    segundos: string
}

class MobileView extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {tiempoRestante: this.props.tiempoRestante};
        this.actualizarEstado = this.actualizarEstado.bind(this);
        this.actualizarEstado();
    }

    actualizarEstado(): void {
        setInterval(() => {
            this.setState({tiempoRestante: this.props.tiempoRestante});
        }, 1000);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="MobileView" data-testid="MobileView">
                <Container fluid={true} style={{marginTop: "15vh"}}>
                    <Row rows={1} cols={1}>
                        <Col cols={12}>
                            <div className="text-dark text-center" id="titulo">
                                <b>Sitio en construcción.</b>
                            </div>
                            <div className="text-dark text-center" id="subtitulo">
                                Estamos trabajando en el sitio para brindarle la mejor
                                experiencia como se lo merece.
                            </div>
                        </Col>
                    </Row>
                    <Row rows={1} cols={1} className="mt-4">
                        <Col cols={12} className="text-center text-dark">
                            <b className="subtitulo">
                                Tiempo Restante:
                                <br/>
                                {this.state.tiempoRestante.dias}
                                &nbsp;días&nbsp;
                                {this.state.tiempoRestante.horas}
                                &nbsp;horas&nbsp;
                                {this.state.tiempoRestante.minutos}
                                &nbsp;minutos&nbsp;
                                {this.state.tiempoRestante.segundos}
                                &nbsp;segundos.
                            </b>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MobileView;
