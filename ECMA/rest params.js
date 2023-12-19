const  summ = (...arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(summ(2, 3, 6, 87, 8, 9))


