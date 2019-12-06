import React, {Component} from 'react';
import './UnderConstructionViewer.scss';
import {isBrowser} from 'react-device-detect';
import BrowserView from "./Views/BrowserView/BrowserView";
import MobileView from "./Views/MobileView/MobileView";

type props = { tiempoRestante: tiempo };
type state = { tiempoRestante: tiempo };
type tiempo = {
    dias: number,
    horas: string,
    minutos: string,
    segundos: string
}

class UnderConstructionViewer extends Component<props, state> {
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
            isBrowser ? <BrowserView tiempoRestante={this.state.tiempoRestante}/> :
                <MobileView tiempoRestante={this.state.tiempoRestante}/>
        );
    }
}

export default UnderConstructionViewer;
