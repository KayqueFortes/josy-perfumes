
    const numeroWhatsApp = "5599981353197";

    const produtos = [
  {
    id: 1,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 2,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 3,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 4,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 5,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 6,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 7,
    categoria: "perfumes",
    marca: "Pepeta",
    nome: "Pepeta",
    preco: 143.92,
    descricao: "10 quilinhos de muito amor.",
    imagem: "imagens/IMG_1935.JPG.jpeg"
  },
  {
    id: 8,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 9,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 10,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 11,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 12,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 13,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
    {
    id: 14,
    categoria: "hidratantes",
    marca: "Apollo",
    nome: "Apollo",
    preco: 63.92,
    descricao: "Papagaio safado.",
    imagem: "imagens/IMG_1766.JPG.jpeg"
  },
  {
    id: 15,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 16,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 17,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 18,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 19,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 20,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
   {
    id: 21,
    categoria: "bodysplash",
    marca: "Golias e Bella",
    nome: "Body Splash Beijinho 200ml",
    preco: 74.32,
    descricao: "Meus lindos.",
    imagem: "imagens/IMG_1906.JPG.jpeg"
  },
  {
    id: 4,
    categoria: "sabonetes",
    marca: "LILY",
    nome: "Sabonete em Barra Perfumado",
    preco: 24.90,
    descricao: "Limpeza suave com perfumação elegante.",
    imagem: ""
  }
];
    let produtosFiltrados = [...produtos];
    let sacola = [];

    const carrossel = document.getElementById("carrosselProdutos");
    const campoBusca = document.getElementById("campoBusca");
    const btnBuscar = document.getElementById("btnBuscar");
    const contadorSacola = document.getElementById("contadorSacola");
    const itensSacola = document.getElementById("itensSacola");
    const valorTotal = document.getElementById("valorTotal");
    const resultadoBusca = document.getElementById("resultadoBusca");
    const painelSacola = document.getElementById("painelSacola");
    const overlay = document.getElementById("overlay");

    function formatarPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }

    function criarCard(produto) {
  return `
    <div class="card">
      <img class="imagem-produto" src="${produto.imagem}" alt="${produto.nome}">
      <div class="marca">${produto.marca}</div>
      <div class="nome">${produto.nome}</div>
      <div class="preco">${formatarPreco(produto.preco)}</div>
      <div class="descricao">${produto.descricao}</div>
      <div class="acoes-produto">
        <button class="btn-sacola" onclick="adicionarNaSacola(${produto.id})">
          Adicionar
        </button>
      </div>
    </div>
  `;
}

function renderizarCategoria(lista, categoria, carrosselId, resultadoId) {
  const carrossel = document.getElementById(carrosselId);
  const resultado = document.getElementById(resultadoId);

  const filtrados = lista.filter(produto => produto.categoria === categoria);

  if (filtrados.length === 0) {
    carrossel.innerHTML = `<div class="vazio">Nenhum produto encontrado.</div>`;
    resultado.textContent = "0 produtos";
    return;
  }

  carrossel.innerHTML = filtrados.map(criarCard).join("");
  resultado.textContent = `${filtrados.length} produto(s)`;
}

function renderizarTudo(lista) {
  renderizarCategoria(lista, "perfumes", "carrosselPerfumes", "resultadoPerfumes");
  renderizarCategoria(lista, "hidratantes", "carrosselHidratantes", "resultadoHidratantes");
  renderizarCategoria(lista, "bodysplash", "carrosselBodySplash", "resultadoBodySplash");
  renderizarCategoria(lista, "sabonetes", "carrosselSabonetes", "resultadoSabonetes");
}

    function pesquisarProdutos() {
  const termo = campoBusca.value.trim().toLowerCase();

  produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termo) ||
    produto.marca.toLowerCase().includes(termo) ||
    produto.descricao.toLowerCase().includes(termo) ||
    produto.categoria.toLowerCase().includes(termo)
  );

  renderizarTudo(produtosFiltrados);
}


    campoBusca.addEventListener("input", pesquisarProdutos);
    btnBuscar.addEventListener("click", pesquisarProdutos);

    function adicionarNaSacola(id) {
      const produto = produtos.find(p => p.id === id);
      const itemExistente = sacola.find(item => item.id === id);

      if (itemExistente) {
        itemExistente.quantidade++;
      } else {
        sacola.push({ ...produto, quantidade: 1 });
      }

      atualizarSacola();
    }

    function removerDireto(id) {
      const itemExistente = sacola.find(item => item.id === id);

      if (!itemExistente) return;

      itemExistente.quantidade--;

      if (itemExistente.quantidade <= 0) {
        sacola = sacola.filter(item => item.id !== id);
      }

      atualizarSacola();
    }

    function aumentarQuantidade(id) {
      const item = sacola.find(item => item.id === id);
      if (item) {
        item.quantidade++;
        atualizarSacola();
      }
    }

    function diminuirQuantidade(id) {
      const item = sacola.find(item => item.id === id);
      if (!item) return;

      item.quantidade--;

      if (item.quantidade <= 0) {
        sacola = sacola.filter(produto => produto.id !== id);
      }

      atualizarSacola();
    }

    function atualizarSacola() {
      const totalItens = sacola.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValor = sacola.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

      contadorSacola.textContent = totalItens;
      valorTotal.textContent = formatarPreco(totalValor);

      if (sacola.length === 0) {
        itensSacola.innerHTML = `<p style="color:#666;">Sua sacola está vazia.</p>`;
        return;
      }

      itensSacola.innerHTML = sacola.map(item => `
        <div class="item-sacola">
          <strong>${item.marca}</strong>
          <div>${item.nome}</div>
          <div style="margin-top:6px; color:#177a6f; font-weight:bold;">
            ${formatarPreco(item.preco)}
          </div>
          <div class="linha-item">
            <div class="controles-qtd">
              <button onclick="diminuirQuantidade(${item.id})">-</button>
              <span>${item.quantidade}</span>
              <button onclick="aumentarQuantidade(${item.id})">+</button>
            </div>
            <div style="font-weight:bold;">
              ${formatarPreco(item.preco * item.quantidade)}
            </div>
          </div>
        </div>
      `).join("");
    }

    function abrirSacola() {
      painelSacola.classList.add("aberto");
      overlay.classList.add("ativo");
    }

    function fecharSacola() {
      painelSacola.classList.remove("aberto");
      overlay.classList.remove("ativo");
    }

    function finalizarPedido() {
  if (sacola.length === 0) {
    alert("Sua sacola está vazia.");
    return;
  }

  const nomeCliente = document.getElementById("nomeCliente").value.trim();
  const tipoRecebimento = document.querySelector('input[name="tipoRecebimento"]:checked').value;
  const enderecoCliente = document.getElementById("enderecoCliente").value.trim();

  if (nomeCliente === "") {
    alert("Por favor, informe seu nome.");
    return;
  }

  if (tipoRecebimento === "Entrega" && enderecoCliente === "") {
    alert("Por favor, informe o endereço para entrega.");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer este pedido:%0A%0A";

  mensagem += `Nome: ${nomeCliente}%0A`;
  mensagem += `Recebimento: ${tipoRecebimento}%0A`;

  if (tipoRecebimento === "Entrega") {
    mensagem += `Endereço: ${enderecoCliente}%0A`;
  }

  mensagem += `%0AItens do pedido:%0A`;

  sacola.forEach(item => {
    mensagem += `• ${item.marca} - ${item.nome}%0A`;
    mensagem += `Quantidade: ${item.quantidade}%0A`;
    mensagem += `Subtotal: ${formatarPreco(item.preco * item.quantidade)}%0A%0A`;
  });

  const total = sacola.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  mensagem += `Total do pedido: ${formatarPreco(total)}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(url, "_blank");
}

   function rolarCarrossel(id, direcao) {
  const carrossel = document.getElementById(id);
  const larguraCard = 268;

  carrossel.scrollBy({
    left: direcao * larguraCard,
    behavior: "smooth"
  });
}

    renderizarTudo(produtosFiltrados);
alternarEndereco();
atualizarSacola();


    atualizarSacola();

    function alternarEndereco() {
  const tipo = document.querySelector('input[name="tipoRecebimento"]:checked').value;
  const campoEnderecoBox = document.getElementById("campoEnderecoBox");

  if (tipo === "Retirada") {
    campoEnderecoBox.style.display = "none";
  } else {
    campoEnderecoBox.style.display = "block";
  }
}