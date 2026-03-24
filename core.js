function getData(key){
    return JSON.parse(localStorage.getItem(key)) || []
}

function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

function generateID(data, field){
    return data.length ? data[data.length-1][field]+1 : 1
}