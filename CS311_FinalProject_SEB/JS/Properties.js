function performConversion() {
    var radios = document.getElementsByName('conversion');
    var inputValue = document.getElementById('inputValue').value;
    var outputValue;
  
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        switch (radios[i].value) {
          case 'Meters to Feet':
            outputValue = inputValue * 3.28084 + " Feet";
            break;
          case 'Feet to Meters':
            outputValue = inputValue / 3.28084 + " Meters";
            break;
          case 'Kilometers to Miles':
            outputValue = inputValue * 0.621371 + " Miles";
            break;
          case 'Miles to Kilometers':
            outputValue = inputValue / 0.621371 + " Kilometers";
            break;
          case 'Celsius to Fahrenheit':
            outputValue = inputValue * 9/5 + 32 + " Fahrenheit";
            break;
          case 'Fahrenheit to Celsius':
            outputValue = (inputValue - 32) * 5/9 + " Celsius";
            break;
          case 'Kilogram to pounds':
            outputValue = inputValue * 2.20462 + " Pounds" ;
            break;
          case 'Pounds to Kilogram':
            outputValue = inputValue / 2.20462 + " Kilogram";
            break;
          case 'Grams to Ounces':
            outputValue = inputValue * 0.035274 + " Ounces";
            break;
          case 'Ounces to Grams':
            outputValue = inputValue / 0.035274 + " Grams";
            break;
        }
        break;
      }
    }
  
    document.getElementById('outputValue').innerHTML = outputValue;
  }