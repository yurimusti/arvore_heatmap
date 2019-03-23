import styled from 'styled-components'

const Main = styled.div `
    display: flex;
    flex:1 ;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh
`
const ContentGrafico = styled.div `
    display:flex;
    flex: 8;
    justify-content: center;
`
const ContentButtons = styled.div `
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 30px
`
export {
    Main,
    ContentGrafico,
    ContentButtons
}