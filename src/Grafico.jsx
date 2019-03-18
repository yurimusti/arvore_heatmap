import React, { Component } from 'react'
import Months from './Months';

export default class Grafico extends Component {



    componentWillMount(){
        const { data, listMonth, days } = this.props;
        this.setState({
            data,
            listMonth,
            days
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data
        })
    }

    render() {
        const { data, listMonth, days } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', padding: 40, borderWidth:1, borderColor:'#ccc', borderStyle:'solid', borderRadius:5 }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop:15, marginRight:10 }}>
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
                        <Months type='domingo' data={data}  />
                        <Months type='segunda' data={data} />
                        <Months type='terca' data={data} />
                        <Months type='quarta' data={data} />
                        <Months type='quinta' data={data} />
                        <Months type='sexta' data={data} />
                        <Months type='sabado' data={data} />
                    </div>
                </div>
            </div>
        )
    }
}
