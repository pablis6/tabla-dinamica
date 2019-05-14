import React, { Component } from 'react';
import './Tabla.css'
import Fila from './Fila';


class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {filaSeleccionada: null}
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    onFilaSeleccionada(fila){
        if(this.props.onFilaSeleccionada){
            this.setState({filaSeleccionada: fila});
            this.props.onFilaSeleccionada(fila);
        }
    }

    render() {
        var filasCabecera = this.props.columnas.map((fila, index) => {
            return <Fila tipo='cabecera' key={index} fila={fila} onFilaSeleccionada={()=>{}} scrollable={this.props.scrollable}></Fila>
        });
        var filasDatos = this.props.datos.map((fila, index) => {
            return <Fila tipo='datos' key={index} fila={fila} filaSeleccionada={this.state.filaSeleccionada} onFilaSeleccionada={(fila) => this.onFilaSeleccionada(fila)}></Fila>
        });
        return (
            <div className="bk-table">
                <table className={"table "+this.props.scrollable ? 'scrollable-table' : ''}>
                    <thead>
                        {filasCabecera}
                        {/* <Fila tipo='cabecera' fila={this.props.columnas}></Fila> */}
                    </thead>
                </table>
                <div className={this.props.scrollable ? "scrollable-body scrollable-always" : ''}>
                    <table className="table">
                        <tbody>
                            {filasDatos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Tabla.propTypes = {

};

export default Tabla;