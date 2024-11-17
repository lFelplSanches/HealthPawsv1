document.getElementById("calcular").addEventListener("click", calcular);

function calcular() {
  // Dados simulados de entrada
  const dadosCSV = [
    {
      nome: "GrandPlus Choice",
      preco: 130,
      densidade: 3440,
      pesoPacote: 15,
      tipo: "Cao",
      link: "",
    },
    {
      nome: "RacaoTeste1",
      preco: 150.69,
      densidade: 3330,
      pesoPacote: 15,
      tipo: "Cao",
      link: "https://fofuradepelo.lojavirtualnuvem.com.br/produtos/racao-teste-1/",
    },
  ];

  // Lógica de cálculo (exemplo simplificado)
  const peso = document.getElementById("peso").value;
  const consumoDiario = peso * 10; // Fórmula simplificada
  const resultados = dadosCSV.map((racao) => {
    const consumoMensal = consumoDiario * 30;
    const custoDiario = (racao.preco / racao.pesoPacote) * consumoDiario;
    const duracao = (racao.pesoPacote * 1000) / consumoDiario;

    return {
      nome: racao.nome,
      preco: racao.preco,
      consumoDiario,
      custoDiario: custoDiario.toFixed(2),
      duracao: duracao.toFixed(2),
      link: racao.link,
    };
  });

  // Atualização da tabela
  const tabela = document.getElementById("tabela-resultados");
  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Preço</th>
      <th>Consumo Diário (g)</th>
      <th>Custo Diário</th>
      <th>Duração (dias)</th>
      <th>Link</th>
    </tr>
  `;
  resultados.forEach((r) => {
    tabela.innerHTML += `
      <tr>
        <td>${r.nome}</td>
        <td>${r.preco}</td>
        <td>${r.consumoDiario}</td>
        <td>${r.custoDiario}</td>
        <td>${r.duracao}</td>
        <td><a href="${r.link}">Comprar</a></td>
      </tr>
    `;
  });
}
