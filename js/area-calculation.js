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
