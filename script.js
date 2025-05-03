document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});
const imagens = [
  "imagens/escola1.jpg",
  "imagens/escola2.jpg",
  "imagens/escola3.jpg"
];
let indiceAtual = 0;
const imgElement = document.getElementById("carousel-img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  imgElement.src = imagens[indiceAtual];
});

btnNext.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  imgElement.src = imagens[indiceAtual];
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-num");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-num");
      const count = +counter.innerText;
      const increment = Math.ceil(target / 60); // velocidade

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
