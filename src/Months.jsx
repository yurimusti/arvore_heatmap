import React, { Component } from 'react'
import moment from 'moment';
import { Tooltip } from 'antd';



export default class Mes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mes: [],
      valid: false
    }
  }
  componentWillReceiveProps() {
    this.setState({
      valid: false
    })
  }
  render() {
    var { data } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {
          data.map((e, i) => {
            const dayOfYear = moment(e.date).dayOfYear()
            if ((i === 0 && dayOfYear === 1)) {
              if (this.state.valid === false) {
                console.log(dayOfYear)
                this.setState({
                  valid: true
                })
              }

            }

            if (this.state.valid) {
              return <Tooltip key={i} title={e.count == 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                <div style={e.count == 0 ? style.color1 : e.count > 0 && e.count < 9 ? style.color2 : e.count < 18 ? style.color3 : e.count < 27 ? style.color4 : style.color5}>
                </div></Tooltip>
            } else {
              if (i == 0) {
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={style.color0}></div>
                    <Tooltip title={e.count == 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                      <div style={e.count == 0 ? style.color1 : e.count > 0 && e.count < 9 ? style.color2 : e.count < 18 ? style.color3 : e.count < 27 ? style.color4 : style.color5}>
                      </div></Tooltip>
                  </div>)
              } else {
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



