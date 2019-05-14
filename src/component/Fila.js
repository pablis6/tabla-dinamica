import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fila extends Component {

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
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            minimumFractionDigits: 2
        })

        var filaHTML, valor
        if(this.props.tipo === 'datos'){
            filaHTML = Object.keys(this.props.fila).map( (col, index) => {
                if(typeof this.props.fila[col] == "string"){ //String
                    valor = this.props.fila[col];
                }
                else if(typeof this.props.fila[col] === "object" && typeof this.props.fila[col].val == "string"){ //Importe
                    valor = formatter.format(this.props.fila[col].val);
                }
                return <td key={index+'-'+col}>{valor}</td>;
            })
        }
        else{ // si es tipo cabecera
            filaHTML = Object.keys(this.props.fila).map( (col, index) => {
                return <th key={col} rowSpan={this.props.fila[col].rowspan} colSpan={this.props.fila[col].colspan} className={this.props.fila[col].className}>{this.props.fila[col].name}</th>;
            });
        }

        var estiloFila = (this.props.tipo === 'datos' ? 'cursor-pointer ' : '') + (this.props.filaSeleccionada === this.props.fila ? 'active' : '');
        return (
            <tr className={estiloFila} onClick={() => this.props.onFilaSeleccionada(this.props.fila)}>{filaHTML}</tr>
        );
    }
}

Fila.propTypes = {

};

export default Fila;