import React, {Component} from 'react';
import './UnderConstruction.scss';
import UnderConstructionViewer from "./UnderConstructionViewer/UnderConstructionViewer";


type props = {};
type tiempo = {
    dias: number,
    horas: string,
    minutos: string,
    segundos: string
}
type state = { tiempoRestante: tiempo };

class UnderConstruction extends Component<props, state> {

    constructor(props: props) {
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
            <UnderConstructionViewer tiempoRestante={this.state.tiempoRestante}/>
        );
    }
}

export default UnderConstruction;
