function calcular(event) {
  event.preventDefault();

  let alcoolInput = document.getElementById("alcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let resulTado = document.getElementById("resultado");

  let textResult = document.getElementById("text-result");
  let resultAlcool = document.getElementById("result-alcool");
  let resultGasolina = document.getElementById("result-gasolina");

  let calculo = (alcoolInput / gasolinaInput);

  if (calculo < 0.7) {
    textResult.innerHTML = "Álcool está mais em conta!";
  } else {
    textResult.innerHTML = "Gasolina está mais em conta!";
  }

  resultAlcool.innerHTML = 'Álcool R$ ' + alcoolInput;
  resultGasolina.innerHTML = 'Gasolina R$ ' + gasolinaInput;

  resulTado.classList.remove("hide");
}
