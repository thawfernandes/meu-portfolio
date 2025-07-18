document
  .querySelector('a[href="#conexoes"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById("conexoes").scrollIntoView({ behavior: "smooth" });
  });
