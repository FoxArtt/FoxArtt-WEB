import React, {Component} from 'react';
import './UnderConstruction.scss';
import {Col, Container, Row} from 'reactstrap';


type props = {};
type tiempo = {
    dias: number,
    horas: string,
    minutos: string,
    segundos: string
}
type state = { tiempoRestante: tiempo };

class UnderConstruction extends Component<props, state> {

    constructor(props: any) {
        super(props);
        this.state = {tiempoRestante: {dias: 0, horas: '', minutos: '', segundos: ''}};
        this.actualizarTiempoContador = this.actualizarTiempoContador.bind(this);
        this.generarFechaFormateada = this.generarFechaFormateada.bind(this);
    }

    componentDidMount(): void {
        this.actualizarTiempoContador();
    }

    public generarFechaFormateada(): tiempo {

        let now = +new Date(), time = (+new Date(2019, 11, 11, 8, 0, 0) - now + 1000) / 1000,
            segundos = ('0' + Math.floor(time % 60)).slice(-2),
            minutos = ('0' + Math.floor(time / 60 % 60)).slice(-2),
            horas = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
            dias = Math.floor(time / (3600 * 24));
        return {
            dias: dias,
            horas: horas,
            minutos: minutos,
            segundos: segundos
        };
    }

    public actualizarTiempoContador(): void {
        setInterval(() => {
            this.setState({
                tiempoRestante: this.generarFechaFormateada()
            });
        }, 1000);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="UnderConstruction" data-testid="UnderConstruction">
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

export default UnderConstruction;
