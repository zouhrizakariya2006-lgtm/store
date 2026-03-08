function reverseString(str) {
    return str.split("").reverse().join("");
}

function countChars(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}



function handleReverse() {
    let v = document.getElementById('reverseInput').value;
    document.getElementById('reverseResult').textContent = reverseString(v);
}

function handleCount() {
    let v = document.getElementById('countInput').value;
    document.getElementById('countResult').textContent = countChars(v);
}

function handleCapitalize() {
    let v = document.getElementById('capitalizeInput').value;
    document.getElementById('capitalizeResult').textContent = capitalizeWords(v);
}



function parseArray(str) {
    return str.split(",").map(n => Number(n.trim()));
}

function arrayMax(arr) {
    return Math.max(...arr);
}

function arrayMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function filterEven(arr) {
    return arr.filter(n => n % 2 === 0);
}
function handleMax() {
    let arr = parseArray(document.getElementById('maxInput').value);
    document.getElementById('maxResult').textContent = arrayMax(arr);
}

function handleMin() {
    let arr = parseArray(document.getElementById('minInput').value);
    document.getElementById('minResult').textContent = arrayMin(arr);
}

function handleSum() {
    let arr = parseArray(document.getElementById('sumInput').value);
    document.getElementById('sumResult').textContent = sumArray(arr);
}

function handleFilter() {
    let arr = parseArray(document.getElementById('filterInput').value);
    document.getElementById('filterResult').textContent = filterEven(arr);
}



function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    let seq = [0, 1];
    while (seq.length < terms) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq;
}


// Handlers
function handleFactorial() {
    let n = Number(document.getElementById('factorialInput').value);
    document.getElementById('factorialResult').textContent = factorial(n);
}

function handlePrime() {
    let n = Number(document.getElementById('primeInput').value);
    document.getElementById('primeResult').textContent = isPrime(n);
}

function handleFibo() {
    let n = Number(document.getElementById('fiboInput').value);
    document.getElementById('fiboResult').textContent = fibonacci(n).join(", ");
}