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
const form = document.getElementById("form-contato");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const voo = document.getElementById("voo").value;
    const descricao = document.getElementById("descricao").value;

    // Criar mensagem para o WhatsApp
    const mensagem = `Olá, meu nome é ${nome}. Meu e-mail é ${email}, e meu telefone é ${telefone}.
    Tive um problema no voo ${voo}. Descrição: ${descricao}.`;

    // Redirecionar para o WhatsApp
    const linkWhatsApp = `https://wa.me/5521980502332?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsApp, "_blank");
});
