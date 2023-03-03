const calcular = document.getElementById("calcular");


function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && peso !== ""){
        const valorImc = (peso / (altura * altura)).toFixed(1);
        let classi = "";
        if(valorImc < 18.5){
            classi = "abaixo do Peso.";
        }else if (valorImc < 25){
            classi = "com peso ideal. Parabéns!!!";
        }else if(valorImc < 30){
            classi = "levemente acima do peso.";
        }else if (valorImc < 35){
            classi = "com obesidade grau I";
        }else if (valorImc < 40){
            classi = "com obedidade grau II";
        }else{
            classi = "com obesidade grau III. Cuidado!!!";
        }


        resultado.textContent = (nome+ " seu IMC é "+valorImc+ " e você está "+classi);
    }else{
        resultado.textContent = "Preencha todos os campos!!!"
    }

}

calcular.addEventListener("click", imc);