import React, {Component} from 'react';
import './BrowserView.scss';
import {Col, Container, Row} from "reactstrap";

type props = { tiempoRestante: tiempo };
type state = { tiempoRestante: tiempo };
type tiempo = {
    dias: number,
    horas: string,
    minutos: string,
    segundos: string
}

class BrowserView extends Component<props, state> {

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
            <div className="BrowserView" data-testid="BrowserView">
                <Container fluid={true}>
                    <Row>
                        <Col cols={6}>
                            <div className="text-white ml-5 text-center" id="encabezadoTexto">
                                Sitio en construcción.
                            </div>
                            <div className="text-white ml-5 text-center" id="subtitulo">
                                Estamos trabajando en el sitio para brindarle la mejor experiencia como se lo merece.
                            </div>
                        </Col>
                        <Col cols={6}/>
                    </Row>
                    <Row rows={1} cols={2}>
                        <Col cols={6} className="text-center subtitulo text-white">
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
                        </Col>
                        <Col cols={6}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BrowserView;
