const sumOfArray = (numbers) =>{
    let sum = 0
    for(var number of numbers){
        sum = sum+number
    }
    return sum
}

console.log(sumOfArray([1,2,3,4,5]))