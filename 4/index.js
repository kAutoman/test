const getFibonaaci = (N) => {
    var output = [0,1];
    for (let i = 2; i < N; i++) {  
        output.push(output[i-2] + output[i-1]);
    }
    return output.pop();
}

console.log(getFibonaaci(10));