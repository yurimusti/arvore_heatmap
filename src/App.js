import React, { Component } from 'react';
import Grafico from './components/Grafico';
import { Button } from 'antd';
import { populaAnosInicio, getYearsFromJson, getAllDatesFromSelect } from './utils';
import { DAYS, LIST_MONTH } from './utils/const';

class App extends Component {

  constructor() {
    super()
    this.state = {
      dataAll: [],
      data:[],
      years: [],
      currentYear: "",
      listMonth: LIST_MONTH,
      days: DAYS,
      isChange: false
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
    this.setState({isChange: true, currentYear})
  }

  render() {
    var { isChange, years, listMonth, days, currentYear } = this.state;
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'center',alignItems:'center', height:'100vh' }}>
        <div style={{ display:'flex', flex: 8, justifyContent: 'center' }}>
          <Grafico isChange={isChange} currentYear={currentYear} listMonth={listMonth} days={days} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{display:'flex', flexDirection:'column', margin:30}}> {years.map((e,i) => <Button onClick={()=> this._handleChangeYear(e)} key={i} style={{margin:10}} type="primary">{e}</Button>)}</div>
        </div>
      </div>
    );
  }
}

export default App;
