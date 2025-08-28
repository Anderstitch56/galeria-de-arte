// --- GALERIA ---
let imagens = document.querySelectorAll(".galeria img");
let figuras = document.querySelectorAll(".galeria figure");
let indiceAtual = 0;

function abrirLightbox(indice) {
  const lightbox = document.getElementById("lightboxGaleria");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  indiceAtual = indice;
  lightboxImg.src = imagens[indice].src;
  let caption = figuras[indice].querySelector("figcaption");
  lightboxCaption.textContent = caption ? caption.textContent : "";
  lightbox.style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightboxGaleria").style.display = "none";
}

function mudarImagem(direcao) {
  indiceAtual += direcao;
  if (indiceAtual < 0) indiceAtual = imagens.length - 1;
  if (indiceAtual >= imagens.length) indiceAtual = 0;
  abrirLightbox(indiceAtual);
}

// --- BOTÃO SOBRE MIM ---
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const lightboxSobre = document.getElementById("lightboxSobre");
const animados = document.querySelectorAll("#lightboxSobre .animado");

// Abre lightbox "Sobre mim"
openBtn.addEventListener("click", () => {
  lightboxSobre.style.display = "flex";
  lightboxSobre.scrollTop = 0;
  animados.forEach(el => el.classList.remove("visivel"));
  setTimeout(verificarScroll, 50);
});

// Fecha lightbox "Sobre mim"
closeBtn.addEventListener("click", () => {
  lightboxSobre.style.display = "none";
  animados.forEach(el => el.classList.remove("visivel"));
});

// Mostrar/esconder textos animados conforme o scroll dentro da lightbox
function verificarScroll() {
  animados.forEach(item => {
    const pos = item.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      item.classList.add("visivel");
    } else {
      item.classList.remove("visivel");
    }
  });
}

// Atualiza animações quando o usuário rola dentro da lightbox
lightboxSobre.addEventListener("scroll", verificarScroll);
