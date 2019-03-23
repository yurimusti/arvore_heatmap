import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row
`

const Box = styled.div`
    margin: 1px;
    width: 9.5px;
    height: 9.5px;
    background: ${props => props.red ? 'red' : props.count === 0 ? '#cccccc' : props.count > 0 && props.count < 9 ? '#C6E48B' : props.count < 18 ? '#7BC96F' : props.count < 27 ? '#239A3B' : '#196127'}
`

const MainBoxError = styled.div`
  display: flex;
  flex-direction: row
`

export { 
    Main,
    Box,
    MainBoxError
}
