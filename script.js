
    const numeroWhatsApp = "5599981353197";

    const produtos = [
      {
        id: 1,
        marca: "ARBO",
        nome: "Desodorante Colônia Masculino 100ml",
        preco: 143.92,
        descricao: "Fragrância fresca e marcante para o dia a dia.",
        imagem: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        marca: "NATIVA SPA",
        nome: "Açúcar Esfoliante Ameixa 200g",
        preco: 63.92,
        descricao: "Esfoliação suave com perfumação deliciosa de ameixa.",
        imagem: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        marca: "CUIDE-SE BEM",
        nome: "Body Splash Beijinho 200ml",
        preco: 74.32,
        descricao: "Cheirinho aconchegante e delicado para usar após o banho.",
        imagem: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 4,
        marca: "FLORATTA",
        nome: "Body Spray Flores Secretas 100ml",
        preco: 39.92,
        descricao: "Toque floral leve, perfeito para rotina e saídas.",
        imagem: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 5,
        marca: "CUIDE-SE BEM",
        nome: "Hidratante Labial Cereja Livre 6,2g",
        preco: 31.92,
        descricao: "Lábios hidratados com toque rosado e aroma suave.",
        imagem: "imagens/IMG_1766.JPG.jpeg"
      },
      {
        id: 6,
        marca: "ELYSÉE",
        nome: "Eau de Parfum Feminino 50ml",
        preco: 189.90,
        descricao: "Perfume sofisticado com presença marcante e elegante.",
        imagem: "imagens/IMG_1906.JPG.jpeg"
      },
      {
        id: 7,
        marca: "MALBEC",
        nome: "Desodorante Colônia 100ml",
        preco: 164.90,
        descricao: "Fragrância intensa e moderna para homens.",
        imagem: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 8,
        marca: "LILY",
        nome: "Creme Acetinado Hidratante 250g",
        preco: 87.90,
        descricao: "Hidratação intensa com perfumação elegante e duradoura.",
        imagem: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 9,
        marca: "QUASAR",
        nome: "Classic Desodorante Colônia 100ml",
        preco: 119.90,
        descricao: "Fragrância fresca com toque cítrico e energético.",
        imagem: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10,
        marca: "GLAMOUR",
        nome: "Secrets Black Desodorante Colônia 75ml",
        preco: 139.90,
        descricao: "Perfume envolvente e elegante para ocasiões especiais.",
        imagem: "imagens/IMG_1935.JPG.jpeg"
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

    function renderizarProdutos(lista) {
      carrossel.innerHTML = "";

      if (lista.length === 0) {
        carrossel.innerHTML = `
          <div class="vazio">
            Nenhum produto encontrado para essa pesquisa.
          </div>
        `;
        resultadoBusca.textContent = "0 produtos encontrados";
        return;
      }

      resultadoBusca.textContent = `${lista.length} produto(s) encontrado(s)`;

      lista.forEach(produto => {
        carrossel.innerHTML += `
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
              <button class="btn-remover" onclick="removerDireto(${produto.id})">
                −
              </button>
            </div>
          </div>
        `;
      });
    }

    function pesquisarProdutos() {
      const termo = campoBusca.value.trim().toLowerCase();

      produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo) ||
        produto.marca.toLowerCase().includes(termo) ||
        produto.descricao.toLowerCase().includes(termo)
      );

      renderizarProdutos(produtosFiltrados);
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

      let mensagem = "Olá! Gostaria de fazer este pedido:%0A%0A";

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

    function rolarCarrossel(direcao) {
      const larguraCard = 268;
      carrossel.scrollBy({
        left: direcao * larguraCard,
        behavior: "smooth"
      });
    }

    renderizarProdutos(produtosFiltrados);
    atualizarSacola();
