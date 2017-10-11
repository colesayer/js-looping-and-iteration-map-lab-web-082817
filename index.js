// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(x => x.toLowerCase())
}

function nameToAttributes(arr){
  let newArray = []
    arr.map(function(x){
    let rObj = {};
    rObj["firstName"] = x.split(" ")[0];
    rObj["lastName"] = x.split(" ")[1];
    newArray.push(rObj)
  })
  return newArray
}

function attributesToPhrase(arr){
  newArray = [];
  arr.map(function(x){
    newArray.push(`${x.name} is from ${x.hometown}`)
  })
  return newArray
}
