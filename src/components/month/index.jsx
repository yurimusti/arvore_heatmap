import React, { Component } from 'react'
import moment from 'moment';
import { Tooltip } from 'antd';
import { Main, Box, MainBoxError } from './style'

class Mes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mes: [],
      valid: false
    }
  }

  render() {
    var { data } = this.props;
    return (
      <Main>
        {
          data.map((e, i) => {
            if (e.valid) {
              return (
                <Tooltip key={i} title={e.count === 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                  <Box count={e.count} />
                </Tooltip>
              );
            } else {
              if (i === 0) {
                return (
                  <MainBoxError key={i}>
                    <Box red></Box>
                    <Tooltip title={e.count === 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                      <Box count={e.count} /></Tooltip>
                  </MainBoxError>
                );
              } else {
                return (
                  <Tooltip key={i} title={e.count === 0 ? "Contribuições: 0 - Data: " + moment(e.date).format('DD/MM/YYYY') : "Contribuições: " + e.count + " - Data: " + moment(e.date).format('DD/MM/YYYY')} >
                    <Box count={e.count} />
                  </Tooltip>
                )
              }
            }
          })
        }
      </Main>
    )
  }
}


export default Mes;



