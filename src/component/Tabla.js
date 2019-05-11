import React, { Component } from 'react';
import './Tabla.css'
import Fila from './Fila';


class Tabla extends Component {
    constructor(props) {
        super(props);

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

    render() {
        var filasDatos = this.props.datos.map((fila, index) => {
            return <Fila tipo='datos' key={index} fila={fila}></Fila>
        });
        var filasCabecera = this.props.columnas.map((fila, index) => {
            return <Fila tipo='cabecera' key={index} fila={fila}></Fila>
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