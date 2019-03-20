import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grafico from './components/grafico';
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
      listMonth: LIST_MONTH,
      days: DAYS,
      isChange: false
    }
  }

  componentWillMount() {
    const {changeCurrentYear, currentYear} = this.props
    const years = getYearsFromJson();
    changeCurrentYear(years[0])
    
    const dataAll = populaAnosInicio();
    const data = getAllDatesFromSelect(currentYear, dataAll)
    this.setState({
      dataAll,
      years,
      data
    })
  }

  _handleChangeYear(currentYear){
    const {changeCurrentYear} = this.props
    changeCurrentYear(currentYear)
  }

  render() {
    var { isChange, years, listMonth, days } = this.state;
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent:'center',alignItems:'center', height:'100vh' }}>
        <div style={{ display:'flex', flex: 8, justifyContent: 'center' }}>
          <Grafico isChange={isChange} listMonth={listMonth} days={days} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{display:'flex', flexDirection:'column', margin:30}}> {years.map((e,i) => <Button onClick={()=> this._handleChangeYear(e)} key={i} style={{margin:10}} type="primary">{e}</Button>)}</div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  currentYear: state.currentYear
})

const mapDispatch = ({ currentYear: { changeCurrentYear }}) => ({
  changeCurrentYear: (value) => changeCurrentYear(value),
})


export default connect(mapState, mapDispatch)(App);
