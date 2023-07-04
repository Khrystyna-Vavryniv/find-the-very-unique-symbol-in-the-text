let convertBtn = document.getElementById("convert-button");
let entryValue = document.getElementById("entry-value");
let outputValue = document.getElementById("output-value")

let DataEntered = '';

entryValue.addEventListener("change", (e) => {
    DataEntered = e.target.value ;   
})

convertBtn.addEventListener("click", function() {
  outputValue.innerHTML = `The unique symbol is "${findUniqueSymbolInText(DataEntered)}"`;
})


function findUniqueSymbolInText(text) {
let words = []

function getArrFromStr(str) {
  str.replace(/[\r\n]/gm, " ").split(' ').map(item => words.push(item))
  words = words.filter(word => word !== "")
  return words;
}

getArrFromStr(text)

console.log(words)
const findFirstUniqueSymbol = (word) => {
  const symbolCount = {};

  //Check the occurrence of each symbol in each word 
  [...word].forEach((symbol) => {
    symbolCount[symbol] = (symbolCount[symbol] || 0) + 1;
  });

  //Find the unique symbol in each word
  const uniqueSymbol = [...word].find((symbol) => symbolCount[symbol] === 1);  
  return uniqueSymbol || "No unique symbol found.";

};
const checkEachSymbol = function() {
    return [...words].map(word => findFirstUniqueSymbol(word))
} 
console.log(checkEachSymbol())
return findFirstUniqueSymbol(checkEachSymbol())
}


