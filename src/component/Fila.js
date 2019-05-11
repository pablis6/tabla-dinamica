import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fila extends Component {
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
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            minimumFractionDigits: 2
        })

        var columna, valor
        if(this.props.tipo === 'datos'){
            columna = Object.keys(this.props.fila).map( (col, index) => {
                if(typeof this.props.fila[col] == "string"){
                    valor = this.props.fila[col];
                }
                else if(typeof this.props.fila[col] === "object" && typeof this.props.fila[col].val == "string"){
                    valor = formatter.format(this.props.fila[col].val);
                }
                return <td key={index+'-'+col}>{valor}</td>;
            })
        }
        else{ // si no es tipo cabecera
            console.log(this.props.fila);
            columna = Object.keys(this.props.fila).map( (col, index) => {
                return <th key={col} rowSpan={this.props.fila[col].rowspan} colSpan={this.props.fila[col].colspan} className={this.props.fila[col].className}>{this.props.fila[col].name}</th>;
            })
        }
        return (
            <tr>{columna}</tr>
        );
    }
}

Fila.propTypes = {

};

export default Fila;