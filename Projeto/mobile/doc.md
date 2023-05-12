react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';
<Icon name="rocket" size={30} color="#900" />


### carrinho de compra
Crie um componente de carrinho de compra que renderize uma lista de produtos e um botão "Adicionar ao carrinho" para cada produto.
Crie um estado para o carrinho de compra no componente de carrinho de compra.
Adicione um manipulador de eventos para o botão "Adicionar ao carrinho" que adicione o produto ao estado do carrinho de compra.
Renderize o número de itens no carrinho de compra em algum lugar da página para que o usuário possa ver quantos itens ele tem no carrinho.
Adicione um componente de carrinho de compra separado que renderize os itens do carrinho de compra e permita que o usuário remova itens do carrinho.
Quando o usuário clicar no botão de checkout, envie o carrinho de compra para o servidor para processar o pedido.
import React, { useState } from 'react';

function CarrinhoDeCompra() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        <li>
          <span>Produto 1</span>
          <button onClick={() => adicionarAoCarrinho('Produto 1')}>Adicionar ao carrinho</button>
        </li>
        <li>
          <span>Produto 2</span>
          <button onClick={() => adicionarAoCarrinho('Produto 2')}>Adicionar ao carrinho</button>
        </li>
        <li>
          <span>Produto 3</span>
          <button onClick={() => adicionarAoCarrinho('Produto 3')}>Adicionar ao carrinho</button>
        </li>
      </ul>
      <p>Total de itens no carrinho: {carrinho.length}</p>
    </div>
  );
}

export default CarrinhoDeCompra;

### react navegate
https://youtu.be/RZbz26EVysA

### slide de fotos
npm install react-native-swiper --save
import Swiper from 'react-native-swiper';
const imagens = [
  { uri: 'https://example.com/imagem1.jpg' },
  { uri: 'https://example.com/imagem2.jpg' },
  { uri: 'https://example.com/imagem3.jpg' },
];
function SlideDeFotos() {
  return (
    <Swiper>
      {imagens.map((imagem, index) => (
        <Image key={index} source={imagem} style={styles.imagem} />
      ))}
    </Swiper>
  );
}
const styles = StyleSheet.create({
  imagem: {
    width: '100%',
    height: 200,
  },
});


Para somar valores numéricos dentro de um array em muitas linguagens de programação, você pode percorrer o array usando um loop e adicionar cada valor a uma variável de soma. Aqui está um exemplo em JavaScript:

javascript
Copy code
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma); // saída: 15
Neste exemplo, criamos um array chamado "numeros" e uma variável de soma inicializada com o valor zero. Em seguida, percorremos o array usando um loop "for", adicionando cada valor ao "soma" variável. Finalmente, imprimimos a soma total na console usando a função console.log().



    // const Port = app.get('port');
    const { createProxyMiddleware } = require('http-proxy-middleware');
    // Configurar proxy para redirecionar as solicitações
    app.use(
    '/add', // Endpoint que você deseja redirecionar
    createProxyMiddleware({
      target: 'http://localhost:19006/add', // URL do servidor de destino
      changeOrigin: true, // Alterar a origem da solicitação para a origem do servidor de destino
    })
  );
