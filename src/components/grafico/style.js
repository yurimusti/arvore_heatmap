import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px; 
    border: 1px solid #ccc; 
    border-radius: 5px;
`
const ListDays = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-right: 10px;
`
const ContentMonth = styled.div `
    display: flex;
    flex-direction: column
`
const ListMonthNames = styled.div `
    display: flex;
    flex-direction: row
`
const ListMonth = styled.div `
    display: flex;
    flex-direction: column }}
`

export {
    Main,
    ListDays,
    ContentMonth,
    ListMonthNames,
    ListMonth
}