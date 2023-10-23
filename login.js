function validarCampo() {
  var campoTexto = document.getElementById("campoTexto").value;
  var palavrasChave = ["2", "3", "4"]; // Adicione suas palavras-chave aqui

  if (campoTexto.trim() === "") {
    alert("Por favor, digite seu codigo de acesso");
  } else {
    var encontrado = false;
    for (var i = 0; i < palavrasChave.length; i++) {
      if (campoTexto.toLowerCase() === palavrasChave[i].toLowerCase()) {
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      // Redirecionar para a nova página se a palavra-chave for encontrada
      window.location.href = "index.html"; // Substitua pelo nome da página desejada
    } else {
      alert("ID não encontrado");
    }
  }
}