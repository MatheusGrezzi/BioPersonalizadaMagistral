// Atualiza o ano dinamicamente no rodapé
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ano").textContent = new Date().getFullYear();
});
