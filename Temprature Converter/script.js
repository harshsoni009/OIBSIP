document.getElementById('convert-btn').addEventListener('click', function() {
    const input = document.getElementById('temp-input').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    // Validate input: Check if it's a number
    if (isNaN(input) || input === '') {
        resultDiv.textContent = 'Please enter a valid number!';
        resultDiv.style.color = '#dc3545'; // Red for error
        return;
    }

    const temp = parseFloat(input);
    let celsius, fahrenheit, kelvin;

    // Convert based on selected unit
    if (unit === 'celsius') {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
    }

    // Display results
    resultDiv.style.color = '#28a745'; // Green for success
    resultDiv.innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
});