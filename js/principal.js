

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");//linha 30


/*console.log(paciente);//tr

console.log(tdPeso);//td que tem o peso
console.log(peso);

console.log(tdAltura);
console.log(altura);
*/
var pesoVlaido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    alert("peso inválido");
    pesoVlaido = false;
    tdImc.textContent = "Peso Inválido"
}

if (altura <= 0 || altura >= 3.00) {
    alert("altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválido";
}

if (alturaValida && pesoVlaido) {
    var imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc; //alterar no html
}

