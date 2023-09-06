function convert() 
{
    var inputTemperature = parseFloat(document.getElementById("Input").value);
    var fromUnit = document.getElementById("From_temp").value;
    var toUnit = document.getElementById("To_temp").value;

    var result;
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = inputTemperature + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (inputTemperature - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (inputTemperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = inputTemperature - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (inputTemperature - 273.15) * 9/5 + 32;
    } else {
        result = inputTemperature; 
    }
    result = result.toFixed(3);
  
    document.getElementById("resultMessage").textContent = inputTemperature+" "+fromUnit+" = "+ result +" "+toUnit ;

   
}
