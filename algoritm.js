
// Convert "1,2,3" -> [1,2,3]
function parseArray(str) {
    return str.split(',')
              .map(s => Number(s.trim()))
              .filter(n => !isNaN(n));
}

/* =================== PROBLEM 1 =================== */
function distinctSum(set1, set2) {
    let sum = 0;

    for (let i = 0; i < set1.length; i++) {
        let found = false;
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) found = true;
        }
        if (!found) sum += set1[i];
    }

    for (let j = 0; j < set2.length; j++) {
        let found = false;
        for (let i = 0; i < set1.length; i++) {
            if (set2[j] === set1[i]) found = true;
        }
        if (!found) sum += set2[j];
    }

    return sum;
}

function handleDistinctSum() {
    const s1 = parseArray(document.getElementById('set1').value);
    const s2 = parseArray(document.getElementById('set2').value);
    document.getElementById('result1').textContent = distinctSum(s1, s2);
}

/* =================== PROBLEM 2 =================== */
function dotProductProcedure(v1, v2, res) {
    res.value = 0;
    for (let i = 0; i < v1.length; i++) {
        res.value += v1[i] * v2[i];
    }
}

function handleDotProductProcedure() {
    const v1 = parseArray(document.getElementById('v1_proc').value);
    const v2 = parseArray(document.getElementById('v2_proc').value);

    const res = { value: 0 };
    dotProductProcedure(v1, v2, res);

    document.getElementById('result2').textContent = res.value;
    document.getElementById('ortho2').textContent = 
        res.value === 0 ? "Orthogonal" : "Not orthogonal";
}

/* =================== PROBLEM 3 =================== */
function dotProductFunction(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function handleDotProductFunction() {
    const v1 = parseArray(document.getElementById('v1_func').value);
    const v2 = parseArray(document.getElementById('v2_func').value);

    const ps = dotProductFunction(v1, v2);

    document.getElementById('result3').textContent = ps;
    document.getElementById('ortho3').textContent =
        ps === 0 ? "Orthogonal" : "Not orthogonal";
}