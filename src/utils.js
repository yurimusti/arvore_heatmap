import data from './data.json';
import moment from 'moment';

const populaAnosInicio = () => {
    const listYears = getYearsFromJson();
    var list = []

    for(var size = 0; size < listYears.length; size++){
        for(var i = 0; i < 365; i++){
          
            var auxDays = moment(moment(listYears[size]).add(1, "year")).dayOfYear(i).format('YYYY-MM-DD')
            var payload = {
                date: auxDays,
                count: 0
            }
            list.push(payload)
        }
    }

    list.map((e) => {
        let count = data.find(k=> k.date === e.date)
        if(count === undefined){
            e.count = 0
        }else{
            e.count = count.count
        }
    });
    return list;

}

const getYearsFromJson = () => {
    let listAnos = []
    let anoAtual = moment(data[0].date).format('YYYY');
    listAnos.push(anoAtual)

    data.filter(k => {
        if(!listAnos.includes(moment(k.date).format('YYYY'))){
            listAnos.push(moment(k.date).format('YYYY'))
            anoAtual = moment(k.date).format('YYYY');
        }
    })
    return listAnos;
}

const getAllDatesFromSelect = (year, listaRetorno) => {
    return listaRetorno.filter(k=> moment(k.date).format('YYYY') === year);
}

export {
    populaAnosInicio,
    getAllDatesFromSelect,
    getYearsFromJson
};