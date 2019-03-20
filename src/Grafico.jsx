import React, { Component } from 'react'
import Months from './Months';
import { populaAnosInicio, getAllDatesFromSelect } from './utils'
import moment from 'moment';


export default class Grafico extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
        }
    }

    inicializaGrafico(currentYear) {

        const dataAll = populaAnosInicio();
        const data = getAllDatesFromSelect(currentYear, dataAll)

        var listSegunda = []
        var listTerca = []
        var listQuarta = []
        var listQuinta = []
        var listSexta = []
        var listSabado = []
        var listDomingo = []

        data.map((e) => {
            const d = moment(e.date).isoWeekday()
            switch (d) {
                case 1: listSegunda.push(e); break
                case 2: listTerca.push(e); break
                case 3: listQuarta.push(e); break
                case 4: listQuinta.push(e); break
                case 5: listSexta.push(e); break
                case 6: listSabado.push(e); break
                case 7: listDomingo.push(e); break
                default: break;
            }
        })

        this.setState({
            listSegunda,
            listTerca,
            listQuarta, 
            listQuinta, 
            listSexta, 
            listSabado, 
            listDomingo,
            valid: false
        });
    }

    componentWillMount() {
        const { currentYear } = this.props;
        this.inicializaGrafico(currentYear);
    }
    componentWillReceiveProps(nextProps) {
        this.inicializaGrafico(nextProps.currentYear);
    }


    render() {
        const { listMonth, days } = this.props;
        const { listSegunda, listTerca, listQuarta, listQuinta, listSexta, listSabado, listDomingo, valid } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', padding: 40, borderWidth: 1, borderColor: '#ccc', borderStyle: 'solid', borderRadius: 5 }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 15, marginRight: 10 }}>
                    {days.map((e, i) => {
                        return <span key={i} style={{ marginTop: 8 }} >{e}</span>
                    })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {listMonth.map((e, i) => {
                            return <span key={i} style={{ marginLeft: 27 }}>{e}</span>
                        })}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Months data={listSegunda} />
                        <Months data={listTerca} />
                        <Months data={listQuarta} />
                        <Months data={listQuinta} />
                        <Months data={listSexta} />
                        <Months data={listSabado} />
                        <Months data={listDomingo} />
                    </div>
                </div>
            </div>
        )
    }
}
