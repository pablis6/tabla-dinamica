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
        this.setState({filaSeleccionada: fila});
        this.props.onFilaSeleccionada(fila);
    }

    render() {
        var filasCabecera = this.props.columnas.map((fila, index) => {
            return <Fila tipo='cabecera' key={index} fila={fila}></Fila>
        });
        var filasDatos = this.props.datos.map((fila, index) => {
            return <Fila tipo='datos' key={index} fila={fila} filaSeleccionada={this.state.filaSeleccionada} onFilaSeleccionada={(fila) => this.onFilaSeleccionada(fila)}></Fila>
        });
        return (
            <table>
                <thead>
                    {filasCabecera}
                    {/* <Fila tipo='cabecera' fila={this.props.columnas}></Fila> */}
                </thead>
                <tbody>
                    {filasDatos}
                </tbody>
            </table>
        );
    }
}

Tabla.propTypes = {

};

export default Tabla;