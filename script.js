document.getElementById('checkBtn').addEventListener('click', checkOddOrEven);
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkOddOrEven();
    }
});
function checkOddOrEven() {
    const inputField = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const value = inputField.value;
    if (value === "") {
        resultDiv.textContent = "Please enter a valid number.";
        resultDiv.className = "result-box odd"; 
        return;
    }

    const number = parseInt(value, 10);
    resultDiv.className = "result-box";
    if (number % 2 === 0) {
        resultDiv.textContent = `${number} is an EVEN number.`;
        resultDiv.classList.add('even');
    } else {
        resultDiv.textContent = `${number} is an ODD number.`;
        resultDiv.classList.add('odd');
    }
}