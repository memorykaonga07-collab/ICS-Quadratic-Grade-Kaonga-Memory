function myOnClickfun(){

    const num1 = document.getElementById('a_value');
    
    const num2 = document.getElementById('b_value');
    
    const num3 = document.getElementById('c_value');

    const variableA = parseFloat(num1.value);
    const variableB = parseFloat(num2.value);
    const variableC = parseFloat(num3.value);

    //document.getElementById('result').innerHTML = "<p>Result: </p>";

    let discriminant = (variableB**2) - 4 *(variableA * variableC);

    if (discriminant > 0){

    let output_x1 = (-variableB - Math.sqrt(discriminant)) / (2*variableA);
    const output_x2 = (-variableB - Math.sqrt(discriminant)) / (2*variableA);

    console.log(output_x1);

    

    document.getElementById('result1').innerText = "X_1: " + output_x1;
    document.getElementById('result2').innerText = "X_2: "+ output_x2

    } else if(discriminant < 0){
        alert("Can not be solved");
    }


}
