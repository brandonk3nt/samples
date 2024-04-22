"use strict";
function checkPrime(int) {
    let i = 2;
    while (i < int) {
        if (int % i === 0) {
            return {
                testCase: int,
                isPrime: false,
                loopNo: i - 1,
            };
        }
        i++;
    }
    return {
        testCase: int,
        isPrime: true,
        loopNo: i - 1,
    };
}
console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(7));
console.log(checkPrime(10));
console.log(checkPrime(13));
console.log(checkPrime(121));
console.log(checkPrime(17463));
console.log(checkPrime(174872463));
console.log(checkPrime(9588723763));
