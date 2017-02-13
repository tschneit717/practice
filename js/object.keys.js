var obj = {
    "one": 1,
    "two": 2,
    "three": 3
}

var keys = Object.keys(obj);

var timesTwo = keys.map(function(key){
    return obj[key]*2;
})

console.log(timesTwo)