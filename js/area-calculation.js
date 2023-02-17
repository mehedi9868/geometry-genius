// for card one:
document.getElementById('card-one-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('card-one-title').innerText;
    const base = getIntutValue('card-one-base');
    const height = getIntutValue('card-one-height');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = 0.5 × b × h
    const result = parseFloat((0.5 * base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})

// for card two:
document.getElementById('card-two-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('card-two-title').innerText;
    const width = getIntutValue('card-two-width');
    const length = getIntutValue('card-two-length');
    //validation
    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = w × l
    const result = parseFloat((width * length).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})

// for card three:
document.getElementById('card-three-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('card-three-title').innerText;
    const base = getIntutValue('card-three-base');
    const height = getIntutValue('card-three-height');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = b × h
    const result = parseFloat((base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})

// for card four:
document.getElementById('card-four-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('card-four-title').innerText;
    const diagonal1 = getIntutValue('card-four-diagonal1');
    const diagonal2 = getIntutValue('card-four-diagonal1');
    //validation
    if (isNaN(diagonal1) || isNaN(diagonal2) || diagonal1 <= 0 || diagonal2 <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = 0.5 × d1 × d2
    const result = parseFloat((0.5 * diagonal1 * diagonal2).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})