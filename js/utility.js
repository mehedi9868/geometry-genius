// common function 1:
function getIntutValue(id) {
    const valueStr = document.getElementById(id).value;
    const value = parseFloat(valueStr);
    return value;
}

// common function 2:
function displayResult(id, title, result) {
    const parentElement = document.getElementById(id);
    const createdElement = document.createElement('li');
    createdElement.classList.add('mb-6');
    createdElement.innerHTML = `
    <div class="flex justify-between">
        <p>${title}</p>
        <p>${result}cm<sup>2</sup></p>
        <button class="bg-blue-600 px-2 py-1 text-white rounded-md hover:bg-blue-400">Covert to m<sup>2</sup>
        </button>
    </div>
    
    `
    parentElement.appendChild(createdElement);
}

//common function 4:
function clearInputField(id) {
    const inputField = document.getElementById(id);
    inputField.value = '';
}

// common function 3:
function setBacground(id) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = 0.5;
    const randomColor = `rgba(${red},${green},${blue},${alpha}) `;
    document.getElementById(id).style.background = randomColor;
}