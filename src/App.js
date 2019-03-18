import React, { Component } from 'react';
import Grafico from './Grafico';
import { populaAnosInicio, getYearsFromJson, getAllDatesFromSelect } from './utils';
import { Button } from 'antd';
import moment from 'moment';

class App extends Component {

  constructor() {
    super()
    this.state = {
      dataAll: [],
      data:[],
      years: [],
      currentYear: "",
      listMonth: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      days: ["Seg", "Ter", "Qua"]
    }
  }

  componentWillMount() {
    const dataAll = populaAnosInicio();
    const years = getYearsFromJson();
    const currentYear = years[0];
    const data = getAllDatesFromSelect(currentYear, dataAll)
    this.setState({
      dataAll,
      years,
      currentYear,
      data
    })
  }

  _handleChangeYear(currentYear){
    const {dataAll} = this.state;
    const data = getAllDatesFromSelect(currentYear, dataAll)
    this.setState({data, currentYear})
  }

  render() {
    const { data, years, listMonth, days } = this.state;
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'center',alignItems:'center', height:'100vh' }}>
        <div style={{ display:'flex', flex: 8, justifyContent: 'center' }}>
          <Grafico data={data} listMonth={listMonth} days={days} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{display:'flex', flexDirection:'column', margin:30}}> {years.map((e,i) => <Button onClick={()=> this._handleChangeYear(e)} key={i} style={{margin:10}} type="primary">{e}</Button>)}</div>
        </div>
      </div>
    );
  }
}

export default App;
