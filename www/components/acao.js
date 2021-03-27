// Variável do texto do display
var textoDisplay = "";

// Primeiro valor das operações
var valor1 = 0;

//Identificar operador do calculo
var operador = "";

function zerarDisplay(){
  textoDisplay = "";
  $(".display").val(0);
}

$(document).on("click",".botao",function(){
  textoDisplay += $(this).val();
  $(".display").val(textoDisplay);
})

$(document).on("click",".ope",function(){
  operador = $(this).html();
  valor1 = textoDisplay;
  zerarDisplay();
})

$(document).on("click","#CE",function(){
  zerarDisplay();
  valor1 = 0;
})

$(document).on("click","#igual",function(){
  var valor2 = textoDisplay;
  zerarDisplay();

  if(operador == "+"){
      textoDisplay = parseFloat(valor1) + parseFloat(valor2);
  }

  if(operador == "-"){
      textoDisplay = parseFloat(valor1) - parseFloat(valor2);
  }

  if(operador == "*"){
      textoDisplay = parseFloat(valor1) * parseFloat(valor2);
  }

  if(operador == "/"){
      textoDisplay = parseFloat(valor1) / parseFloat(valor2);
  }
  $(".display").val(textoDisplay);

})
