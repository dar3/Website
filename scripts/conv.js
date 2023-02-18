function calculate(){

// div 1 bar -> PSI

let a = document.getElementById("bar_value").value;

let result = a * 14.504;

document.getElementById("res").innerHTML = Math.round(result*100)/100; 

// div 2 PSI -> bar

let b = document.getElementById("psi_value").value;

let result2 = b / 14.504;

document.getElementById("res1").innerHTML = Math.round(result2*100)/100;

// div 3 kPa -> bar

let c = document.getElementById("kpa_value").value;

let result3 = c / 100;

document.getElementById("res2").innerHTML = (result3);


};