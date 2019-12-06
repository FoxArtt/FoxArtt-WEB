import React, {Component} from 'react';
import './MobileView.scss';

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
                MobileView Component
            </div>
        );
    }
}

export default MobileView;
