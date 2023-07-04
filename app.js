let convertBtn = document.getElementById("convert-button");
let entryValue = document.getElementById("entry-value");
let outputValue = document.getElementById("output-value")

let jsonDataEntered = '';

entryValue.addEventListener("change", (e) => {
    jsonDataEntered = e.target.value ;   
})


convertBtn.addEventListener("click", convertJSON)

function convertJSON(){    
    let jsonDataTemp = JSON.parse(jsonDataEntered)
    if (jsonDataTemp.condition.include){
        outputValue.innerHTML = `{"result": ${JSON.stringify(filterInclude(jsonDataTemp))}}`;
    } else if (jsonDataTemp.condition.exclude) {
        outputValue.innerHTML = `{"result": ${JSON.stringify(filterExclude(jsonDataTemp))}}`;
    } else if(jsonDataTemp.condition = false){
        outputValue.innerHTML = "Data in wrong format"    }
     else {
        outputValue.innerHTML = "Data in wrong format"
    }
}



function filterExclude(jsonData){
    let exclude = Object.values(jsonData.condition.exclude);
    let sortBy = Object.values(jsonData.condition.sort_by).join('');

    let filteredDataArrExcludeValues = JSON.parse(JSON.stringify(jsonData.data))

    let filteredArray = filteredDataArrExcludeValues;

    for (const condition of exclude) {
        filteredArray = filteredArray.filter(item=>{
            const key = Object.keys(condition)[0]
            if (item[key] !== condition[key]){
                return true
            }
        })
    }
    filteredArray.sort((a,b)=>
            (a[sortBy] < b[sortBy]) ? -1 :
            (a[sortBy] > b[sortBy]) ? 1 :
            0);
    return (filteredArray);
}



function filterInclude(jsonData){
    let include = Object.values(jsonData.condition.include);
    let sortBy = Object.values(jsonData.condition.sort_by).join('');

    let filteredDataArrIncludeValues = JSON.parse(JSON.stringify(jsonData.data))

    let filteredArray = filteredDataArrIncludeValues;

    for (const condition of include) {
        filteredArray = filteredArray.filter(item=>{
            const key = Object.keys(condition)[0]
            if (item[key] === condition[key]){
                return true
            }
        })
    }
    filteredArray.sort((a,b)=>
            (a[sortBy] < b[sortBy]) ? -1 :
            (a[sortBy] > b[sortBy]) ? 1 :
            0);
    return (filteredArray);
}

