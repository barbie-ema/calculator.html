<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScreen</title>
  </head>
  <body>
    <p id="demo"></p>
    <p id="hello"></p>
    <p id="joy"></p>
    <script>
      window.alert("Hello! Welcome to Barbie's Calculator. Click OK to continue")
      let num1 = parseInt(prompt("Kindly Enter Your First Number"));
let option = prompt("Kindly Select An Operator From The Following Options: +, -, /, *");
let num2 = parseInt(prompt("Kindly Enter Your Second Number"));

if (option === "+") {
    let addition = num1 + num2;
    alert(addition);
} else if(option ==="-"){
    let subtraction = num1 - num2;
    alert(subtraction);
} else if(option ==="*"){
    let multiplication = num1 * num2;
    alert(multiplication);
} else if(option ==="/"){
    let division = num1 / num2;
    alert(division);
} else (
    alert("Invalid Input!"));

    
    </script>
</body>
</html>
