
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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        this.reset();
      } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    }).catch(error => {
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    });
  });
});

