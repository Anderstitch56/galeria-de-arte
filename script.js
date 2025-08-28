let midias = document.querySelectorAll(".galeria img, .galeria video");
let figuras = document.querySelectorAll(".galeria figure");
let indiceAtual = 0;

function abrirLightbox(indice) {
  const lightbox = document.getElementById("lightboxGaleria");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxCaption = document.getElementById("lightbox-caption");

  indiceAtual = indice;
  let item = midias[indice];

  // Se for imagem
  if (item.tagName === "IMG") {
    lightboxImg.src = item.src;
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";
  } 
  // Se for vídeo
  else if (item.tagName === "VIDEO") {
    lightboxVideo.src = item.src;
    lightboxVideo.style.display = "block";
    lightboxImg.style.display = "none";
  }

  let caption = figuras[indice].querySelector("figcaption");
  lightboxCaption.textContent = caption ? caption.textContent : "";
  lightbox.style.display = "flex";
}


function fecharLightbox() {
  document.getElementById("lightboxGaleria").style.display = "none";
}

function mudarImagem(direcao) {
  indiceAtual += direcao;
  if (indiceAtual < 0) indiceAtual = midias.length - 1;
  if (indiceAtual >= midias.length) indiceAtual = 0;
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


const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 300;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.05,
    brightness: Math.random() * 1.5
  });
}

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

canvas.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    const dx = (mouseX - canvas.width/2) * star.speed;
    const dy = (mouseY - canvas.height/2) * star.speed;

    star.brightness += (Math.random() - 0.5) * 0.1;
    if(star.brightness > 2) star.brightness = 2;
    if(star.brightness < 0) star.brightness = 0;

    ctx.fillStyle = `rgba(255,255,255,${star.brightness})`;
    ctx.beginPath();
    ctx.arc(star.x - dx, star.y - dy, star.size, 0, Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


