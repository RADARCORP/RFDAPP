function validarCampo() {
  var campoTexto = document.getElementById("campoTexto").value;
  var palavraChave = "Titan";

  if (campoTexto.trim() === "") {
    alert("Por favor, digite algo no campo.");
  } else if (campoTexto.toLowerCase() === palavraChave.toLowerCase()) {
    window.location.href = "index (4).html"; // Substitua pelo nome da página desejada
  } else {
    alert("Você digitou: " + campoTexto);
  }
}