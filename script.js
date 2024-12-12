// Referências do carrossel
const carouselInner = document.querySelector(".carousel-inner");
let index = 0; // Índice inicial do carrossel

// Função para avançar no carrossel
function moveCarousel() {
  const items = document.querySelectorAll(".testimonial");
  const totalItems = items.length;
  const visibleItems = 2; // Ajuste para quantos itens visíveis você deseja
  const itemWidth = items[0].offsetWidth;

  // Calcula a nova posição
  index = (index + 1) % totalItems;
  const offset = -(index * itemWidth);

  // Move o carrossel
  carouselInner.style.transform = `translateX(${offset}px)`;
}

// Avança automaticamente a cada 5 segundos
setInterval(moveCarousel, 5000);
