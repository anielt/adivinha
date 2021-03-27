//var qualLetra = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);

// function carregaPrompt() {
  var zeroaDez = parseInt(Math.random() * 10 + 1)
   
  var chances = 3

  
while (chances>0){
      var chute = parseInt(prompt("Adivinhe o número (entre 1 e 10) que a máquina pensou:"))
      if (zeroaDez == chute) {
        document.write("<h2>" + "Parabéns! Você adivinhou que era " + zeroaDez + "! E ganhou 10 pontos!" + "</h2>")
        break
      }
      else  if (chute > zeroaDez) {
       chances = chances - 1
       alert("Menos.")
  }
    else if (chute < zeroaDez){
     chances = chances - 1
     alert("Mais.")
    }

  }

  if (chute != zeroaDez) {
    document.write("<h2>" + "Chega de chances! O número secreto era " + zeroaDez + " :/" + "</h2>")
  }
// }
