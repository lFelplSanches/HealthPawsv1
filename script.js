document.querySelectorAll('.proximo').forEach(btn => btn.addEventListener('click', () => mudarEtapa(1)));
document.querySelectorAll('.anterior').forEach(btn => btn.addEventListener('click', () => mudarEtapa(-1)));

function mudarEtapa(delta) {
  const banners = document.querySelectorAll('.banner');
  let ativoIndex = [...banners].findIndex(banner => banner.classList.contains('ativo'));
  banners[ativoIndex].classList.remove('ativo');
  banners[ativoIndex + delta].classList.add('ativo');
}

document.getElementById('calcular').addEventListener('click', calcular);

function calcular() {
  // Dados simulados de ração
  const dadosCSV = [
    { nome: "GrandPlus Choice", preco: 130, densidade: 3440, pesoPacote: 15, tipo: "Cao", qualidade: 8, link: "" },
    { nome: "Ração Teste", preco: 150.69, densidade: 3330, pesoPacote: 15, tipo: "Cao", qualidade: 9, link: "https://fofuradepelo.lojavirtualnuvem.com.br/produtos/racao-teste/" }
  ];

  const peso = parseFloat(document.getElementById('peso').value);
  const consumoDiario = peso * 10; // Fórmula simplificada

  const resultados = dadosCSV.map(racao => {
    const custoDiario = (racao.preco / racao.pesoPacote) * consumoDiario;
    const duracao = (racao.pesoPacote * 1000) / consumoDiario;
    return { ...racao, custoDiario: custoDiario.toFixed(2), duracao: duracao.toFixed(1) };
  });

  resultados.sort((a, b) => a.custoDiario - b.custoDiario); // Ordenar pela economia

  const tabela = document.getElementById('tabela-resultados');
  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Preço (R$)</th>
      <th>Consumo Diário (g)</th>
      <th>Custo Diário (R$)</th>
      <th>Duração (dias)</th>
      <th>Link</th>
    </tr>
  `;
  resultados.forEach(r => {
    tabela.innerHTML += `
      <tr>
        <td>${r.nome}</td>
        <td>${r.preco}</td>
        <td>${(peso * 10).toFixed(2)}</td>
        <td>${r.custoDiario}</td>
        <td>${r.duracao}</td>
        <td><a href="${r.link}" target="_blank">Comprar</a></td>
      </tr>
    `;
  });

  const analise = `Melhor escolha: ${resultados[0].nome} (Custo diário: R$${resultados[0].custoDiario}, duração: ${resultados[0].duracao} dias).`;
  document.getElementById('analise-comparativa').innerText = analise;
}
