// mostrar mensagem ao enviar o formulário
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio 
  document.getElementById("msg").textContent = "Mensagem enviada com sucesso!";
});
