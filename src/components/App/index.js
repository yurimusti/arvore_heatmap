import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main, ContentGrafico, ContentButtons } from './style'
import Grafico from '../Grafico';
import { Button } from 'antd';
import { populaAnosInicio, getYearsFromJson, getAllDatesFromSelect } from '../../utils';
import { DAYS, LIST_MONTH } from '../../utils/const';

class App extends Component {

  constructor() {
    super()
    this.state = {
      dataAll: [],
      data: [],
      years: [],
      listMonth: LIST_MONTH,
      days: DAYS,
    }
  }

  componentDidMount() {
    const { changeCurrentYear, currentYear } = this.props
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

  _handleChangeYear(currentYear) {
    const { changeCurrentYear } = this.props
    changeCurrentYear(currentYear)
  }

  render() {
    var { years, listMonth, days } = this.state;
    return (
      <Main>
        <ContentGrafico>
          <Grafico listMonth={listMonth} days={days} />
        </ContentGrafico>
        <ContentButtons>
            {years.map((e, i) =>
              <Button onClick={() => this._handleChangeYear(e)} key={i} style={{ margin: 10 }} type="primary">
                {e}
              </Button>)}
        </ContentButtons>
      </Main>
    );
  }
}

const mapState = state => ({
  currentYear: state.currentYear
})

const mapDispatch = ({ currentYear: { changeCurrentYear } }) => ({
  changeCurrentYear: (value) => changeCurrentYear(value),
})


export default connect(mapState, mapDispatch)(App);
