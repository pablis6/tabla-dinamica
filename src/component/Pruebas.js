import React, { Component } from 'react';
import Tabla from './Tabla';
import './Pruebas.scss';

class Pruebas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnas: [],
            datos: []
        }
        this.formatter = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            minimumFractionDigits: 2
        });
    }
    

    getSuma(lista, campoFiltro){
        var sumatorio = 0;
        lista.forEach(element => {
            if(typeof element[campoFiltro] === 'string'){
                sumatorio += Number(element[campoFiltro])
            }
            else if(typeof element[campoFiltro] === 'object' && element[campoFiltro].val){
                sumatorio += Number(element[campoFiltro].val);
            }
        });

        return sumatorio;
    }
    getSumaEuros(lista, campoFiltro){

        

        var sumatorio = 0;
        lista.forEach(element => {
            sumatorio += Number(element[campoFiltro].val);
        });

        return this.formatter.format(sumatorio);
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
        }, {
            name: '',
            rowspan: 2,
            className: 'scroll'
        } ]
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
                'columnaPrimera': "columna primera",
                'columnaSegunda': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaQuinta': "15",
                'columnaSexta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
            },
            {
                'columnaPrimera': "columna primera",
                'columnaSegunda': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaQuinta': "25",
                'columnaSexta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
            },
            {
                'columnaPrimera': "columna primera",
                'columnaSegunda': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaQuinta': "10",
                'columnaSexta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
            },
            {
                'columnaPrimera': "columna primera",
                'columnaSegunda': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaQuinta': "30",
                'columnaSexta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
            },
            {
                'columnaPrimera': "columna primera",
                'columnaSegunda': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaTercera': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaCuarta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
                'columnaQuinta': "95",
                'columnaSexta': {"currency": {"sd": "EUR"}, "val": "1000.00"},
            }
        ];

        var anchoCeldas = ["w250", "w250", "w75", "w75", "w75", "w75"];

        var sumatorios = [{
            value: 'TOTAL',
            className: 'colPrim'
        }, {
            value: this.getSumaEuros(data, 'columnaSegunda'),
            className: 'colSeg'
        }, {
            value: this.getSumaEuros(data, 'columnaTercera'),
            className: 'colTer'
        }, {
            value: this.getSumaEuros(data, 'columnaCuarta'),
            className: 'colCuar'
        }, {
            value: this.getSuma(data, 'columnaQuinta'),
            className: 'colQuin'
        }, {
            value: this.getSumaEuros(data, 'columnaSexta'),
            className: 'colSex'
        }, {
            value: '',
            className: 'scroll'
        } ];
        
        this.setState({
            columnas: [lasColumnas, colsHijas],
            datos: data,
            anchoCeldas: anchoCeldas,
            sumatorios: sumatorios
        })
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

    filaSeleccionada(fila){
        console.log("Tengo el control de: ", fila);
    }

    render() {
        return (
            <div className="centrado">    
                <Tabla columnas={this.state.columnas}
                    datos={this.state.datos}
                    scrollable={true}
                    anchoCeldas={this.state.anchoCeldas}
                    sumatorios={this.state.sumatorios}
                    onFilaSeleccionada={(fila) => this.filaSeleccionada(fila)}></Tabla>
            </div>
        );
    }
}

Pruebas.propTypes = {

};

export default Pruebas;