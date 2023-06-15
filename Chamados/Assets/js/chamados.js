// Exemplo de dados dos chamados (pode ser obtido por meio de uma API ou outra fonte de dados)
const chamados = [
    { id: 1, titulo: 'Chamado 1', status: 'Aberto' },
    { id: 2, titulo: 'Chamado 2', status: 'Aberto' },
    { id: 3, titulo: 'Chamado 3', status: 'Fechado' },
    { id: 4, titulo: 'Chamado 4', status: 'Fechado' },
    // ...mais chamados
  ];
  
  // Função para renderizar os chamados na interface
  function renderizarChamados() {
    const chamadosContainer = document.getElementById('chamados-container');
    
    // Limpar o conteúdo existente
    chamadosContainer.innerHTML = '';
  
    // Percorrer a lista de chamados
    chamados.forEach(chamado => {
      // Criar um elemento de lista para cada chamado
      const chamadoItem = document.createElement('li');
      chamadoItem.textContent = `ID: ${chamado.id} - Título: ${chamado.titulo} - Status: ${chamado.status}`;
  
      // Adicionar o chamado à lista de chamados
      chamadosContainer.appendChild(chamadoItem);
    });
  }
  
  // Chamar a função para renderizar os chamados quando a página for carregada
  document.addEventListener('DOMContentLoaded', renderizarChamados);
  