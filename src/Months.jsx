import React, { Component } from 'react'
import moment from 'moment';
import { Tooltip } from 'antd';

var valid = false;

export default class Mes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mes: []
    }
  }


  getLine(mes) {
    var index = 0;
    const { data } = this.props;
    console.log(moment(data[0].date).weekday())
    switch (mes) {
      case 'domingo':
        index = 1
        break;

      case 'segunda':
        index = 2;
        break;

      case 'terca':
        index = 3;
        break;

      case 'quarta':
        index = 4;
        break;

      case 'quinta':
        index = 5;
        break;

      case 'sexta':
        index = 6;
        break;

      case 'sabado':
        index = 7;
        break;

      default:
        break
    }
    var list = []
    data.map((e) => {
      const d = moment(e.date).isoWeekday()
      if (d === index) {
        list.push(e);
      }
    });

    this.setState({ mes: list })
  }

  componentWillMount() {

    const { type } = this.props;
    this.getLine(type)

  }

  componentWillReceiveProps() {
    const { type } = this.props;
    this.getLine(type)
  }

  render() {
    var { mes } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {

          mes.map((e, i) => {

            if ((i === 0 && moment(e.date).dayOfYear() === 1)) {
              if (valid !== true) {
                valid = true
              }
            }

            if (valid) {
              return <Tooltip key={i} title={e.count == 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                <div style={e.count == 0 ? style.color1 : e.count > 0 && e.count < 9 ? style.color2 : e.count < 18 ? style.color3 : e.count < 27 ? style.color4 : style.color5}>
                </div></Tooltip>
            }else{
              if(i==0){
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={style.color0}></div>
                    <Tooltip title={e.count == 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                      <div style={e.count == 0 ? style.color1 : e.count > 0 && e.count < 9 ? style.color2 : e.count < 18 ? style.color3 : e.count < 27 ? style.color4 : style.color5}>
                      </div></Tooltip>
                  </div>)
              }else{
              return <Tooltip key={i} title={e.count == 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
              <div style={e.count == 0 ? style.color1 : e.count > 0 && e.count < 9 ? style.color2 : e.count < 18 ? style.color3 : e.count < 27 ? style.color4 : style.color5}>
              </div></Tooltip>
              }
            }


          })
        }
      </div>
    )
  }
}

const style = {
  color0: {
    background: 'red',
    margin: 1,
    width: 10,
    height: 10
  },
  color1: {
    background: '#ccc',
    margin: 1,
    width: 10,
    height: 10
  },
  color2: {
    background: '#C6E48B',
    margin: 1,
    width: 10,
    height: 10
  },
  color3: {
    background: '#7BC96F',
    margin: 1,
    width: 10,
    height: 10
  },
  color4: {
    background: '#239A3B',
    margin: 1,
    width: 10,
    height: 10
  },
  color5: {
    background: '#196127',
    margin: 1,
    width: 10,
    height: 10
  }

}



