import React, { Component } from 'react';
import Tabla from './Tabla';
import './Pruebas.css';

class Pruebas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnas: [],
            datos: []
        }
    }

    componentWillMount() {
        var lasColumnas = [{
            name: 'Primero',
            rowspan: 2,
            className: 'colPrim'
        }, {
            name: 'Segunda',
            rowspan: 2,
            className: 'colSeg'
        }, {
            name: 'Tercera y cuarta',
            colspan: 2,
            className: ''
        }, {
            name: 'Quinta y sexta',
            colspan: 2,
            className: ''
        }, ]
        var colsHijas = [{
            name: 'Tercera',
            className: 'colTer'
        }, {
            name: 'Cuarta',
            className: 'colCuar'
        }, {
            name: 'Quinta',
            className: 'colQuin'
        }, {
            name: 'Sexta',
            className: 'colSex'
        }];
        var data = [
            {
                'columnaPrimera': 'el dato primero',
                'columnaSegunda': 'el dato segundo',
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': 'el dato cuarto',
                'columnaQuinta': 'el dato quinto',
                'columnaSexta': 'el dato quinto',
            },
            {
                'columnaPrimera': 'el dato primero',
                'columnaSegunda': 'el dato segundo',
                'columnaTercera': 'el dato tercero',
                'columnaCuarta': 'el dato cuarto',
                'columnaQuinta': 'el dato quinto',
                'columnaSexta': 'el dato quinto',
            },
            {
                'columnaPrimera': 'el dato primero',
                'columnaSegunda': 'el dato segundo',
                'columnaTercera': 'el dato tercero',
                'columnaCuarta': 'el dato cuarto',
                'columnaQuinta': 'el dato quinto',
                'columnaSexta': 'el dato quinto',
            },
            {
                'columnaPrimera': 'el dato primero',
                'columnaSegunda': 'el dato segundo',
                'columnaTercera': 'el dato tercero',
                'columnaCuarta': 'el dato cuarto',
                'columnaQuinta': 'el dato quinto',
                'columnaSexta': 'el dato quinto',
            },
            {
                'columnaPrimera': 'el dato primero',
                'columnaSegunda': 'el dato segundo',
                'columnaTercera': 'el dato tercero',
                'columnaCuarta': 'el dato cuarto',
                'columnaQuinta': 'el dato quinto',
                'columnaSexta': 'el dato quinto',
            }
        ]
        
            this.setState({
                columnas: [lasColumnas, colsHijas],
                datos: data
            })

        // fetch("https://api.punkapi.com/v2/beers")
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({
        //         columnas: lasColumnas,
        //         datos: data
        //     })
        // })
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
        return (
            <div className="centrado">    
                <Tabla columnas={this.state.columnas} datos={this.state.datos}></Tabla>
            </div>
        );
    }
}

Pruebas.propTypes = {

};

export default Pruebas;