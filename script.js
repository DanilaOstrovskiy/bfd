/*function firstDuplicate(str){
    const charCount = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        if(charCount[char]){
            return char;
        }
        charCount[char] = true
    }
    return null
}*/

///the time complexity is O(n) and Space complexity is O(n)

/*
function fibonacci(num) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }
    return result[num]

}*/





function fibonacciShort(num) {
    let a = 1,
        b = 1;

    for (let i = 3; i <= num; i++) {
        [a,b] = [b,a + b];
    }
    return b;
}