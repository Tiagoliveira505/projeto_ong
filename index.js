// seleciona todos os itens do menu
const items = document.querySelectorAll(".menu-item");

// percorre cada item
items.forEach(item => {

  const text = item.querySelector("a"); // pega o texto
  let timeout; // controla tempo da animação

  // cria um boneco (SVG)
  const createPerson = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("viewBox", "0 0 50 100"); // área do desenho
    svg.classList.add("person");

    svg.innerHTML = `
      <circle cx="25" cy="20" r="10"/> <!-- cabeça -->
      <rect x="20" y="30" width="10" height="30" rx="5"/> <!-- corpo -->
      <line class="arm arm-left" x1="25" y1="35" x2="5" y2="50"/> <!-- braço esquerdo -->
      <line class="arm arm-right" x1="25" y1="35" x2="45" y2="50"/> <!-- braço direito -->
    `;

    return svg;
  };

  // cria dois bonecos
  const left = createPerson();
  left.classList.add("left");

  const right = createPerson();
  right.classList.add("right");

  // adiciona no menu
  item.appendChild(left);
  item.appendChild(right);

  // QUANDO PASSA O MOUSE
  item.addEventListener("mouseenter", () => {
    clearTimeout(timeout);

    // mostra bonecos
    left.style.opacity = "1";
    right.style.opacity = "1";

    // entra lateralmente
    left.style.transform = "translateX(15px)";
    right.style.transform = "translateX(-15px)";

    timeout = setTimeout(() => {
      item.classList.add("active"); // levanta braços

      // sobe
      left.style.transform = "translateX(15px) translateY(-8px)";
      right.style.transform = "translateX(-15px) translateY(-8px)";
      text.style.transform = "translateY(-8px)";
    }, 120);
  });

  // QUANDO SAI O MOUSE
  item.addEventListener("mouseleave", () => {
    clearTimeout(timeout);

    // esconde
    left.style.opacity = "0";
    right.style.opacity = "0";

    item.classList.remove("active");

    // volta ao normal
    left.style.transform = "translateX(0) translateY(0)";
    right.style.transform = "translateX(0) translateY(0)";
    text.style.transform = "translateY(0)";
  });

});