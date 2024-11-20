function callback (a,b, cb) {
    var sum = a+b //14+12=26
    var sub = a-b //14-12=2
    var mult = cb(sum,sub) //26,2
    return mult
}

console.log(callback(14,12, mult))
console.log(callback(14,12, percentaage))
console.log(callback(14,12, sub)) 


function percentaage (a,b) { //26,2
    return a%b //26%2
}
function mult (a,b) { //26, 2
    return a*b  //52
}
function sub (a,b) {
    return a-b
}

