import React, { Component } from 'react'
import Months from '../Month';
import { populaAnosInicio, getAllDatesFromSelect } from '../../utils'
import moment from 'moment';
import { connect } from 'react-redux';

class Grafico extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            valid: false
        }
    }

    inicializaGrafico(currentYear) {
        const dataAll = populaAnosInicio();
        const data = getAllDatesFromSelect(currentYear, dataAll)

        var listSegunda = [], listTerca = [], listQuarta = [], listQuinta = [], listSexta = [], listSabado = [], listDomingo = [];
        var listAuxSegunda = [], listAuxTerca = [], listAuxQuarta = [], listAuxQuinta = [], listAuxSexta = [], listAuxSabado = [], listAuxDomingo = [];

        data.map((e) => {
            const d = moment(e.date).isoWeekday()
            switch (d) {
                case 1: listAuxSegunda.push(e); break
                case 2: listAuxTerca.push(e); break
                case 3: listAuxQuarta.push(e); break
                case 4: listAuxQuinta.push(e); break
                case 5: listAuxSexta.push(e); break
                case 6: listAuxSabado.push(e); break
                case 7: listAuxDomingo.push(e); break
                default: break;
            }
        })
     
        listAuxSegunda.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()
            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listSegunda.push(aux)
        })

        listAuxTerca.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()
            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listTerca.push(aux)
        })

        listAuxQuarta.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()
            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listQuarta.push(aux)
        })

        listAuxQuinta.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()
            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listQuinta.push(aux)
        })
        
        listAuxSexta.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()
            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listSexta.push(aux)
        })

        listAuxSabado.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()

            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listSabado.push(aux)
        })

        listAuxDomingo.map((e)=>{
            const dayOfYear = moment(e.date).dayOfYear()

            if(dayOfYear === 1){
                this.state.valid = true
            }

            var aux = {
                date: e.date,
                count: e.count,
                valid: this.state.valid
            }
            listDomingo.push(aux)
        })

        this.setState({
            listSegunda,
            listTerca,
            listQuarta,
            listQuinta,
            listSexta,
            listSabado,
            listDomingo
        })

        this.state.valid = false;
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
        const { listSegunda, listTerca, listQuarta, listQuinta, listSexta, listSabado, listDomingo } = this.state;
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

const mapState = state => ({
    currentYear: state.currentYear
})



export default connect(mapState)(Grafico)