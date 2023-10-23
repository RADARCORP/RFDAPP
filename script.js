function validarCampo() {
  var campoTexto = document.getElementById("campoTexto").value;
  var palavraChave = "021883/08";
    
  if (campoTexto.trim() === "") {
    alert("Por favor, digite algo no campo.");
  } else if (campoTexto.toLowerCase() === palavraChave.toLowerCase()) {
    window.location.href = "index (1).html"; // Substitua pelo nome da página desejada
  } else {
    alert("Você digitou: " + campoTexto);
  }
}