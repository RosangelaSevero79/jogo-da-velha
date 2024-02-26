# jogo-da-velha

Este é um simples jogo da velha desenvolvido em HTML, CSS e JavaScript. Abaixo está um resumo de como o jogo foi construído:

# Estrutura HTML

A estrutura básica da página consiste em um título, campos de entrada para os nomes dos jogadores, um botão para iniciar o jogo, a grade do jogo e um indicador do jogador da vez.
Cada célula da grade do jogo é representada por um botão.

# Estilização CSS

O layout é estilizado para fornecer uma aparência agradável, com um fundo verde e estilos para os elementos da página.
Os botões do jogo têm um tamanho fixo, uma cor de fundo atraente e uma fonte cursive.

# Lógica JavaScript

O script gerencia a lógica do jogo.
Ao clicar no botão "Iniciar Jogo", os nomes dos jogadores são obtidos e o jogo é inicializado com o jogador "X".
Cada célula do jogo pode ser clicada, ativando a função newMove, que insere a marca do jogador atual (X ou O) e verifica se há um vencedor ou empate.
A função check verifica se uma combinação vencedora foi alcançada ou se houve um empate.

# Funcionalidades

O jogo mantém controle dos movimentos dos jogadores e exibe o nome do jogador da vez.
Quando um jogador vence ou há empate, uma mensagem é exibida em uma caixa de alerta, e o jogo é reiniciado.

# Como Jogar

1-Insira os nomes dos jogadores nos campos apropriados.
2-Clique em "Iniciar Jogo" para começar.
3-Clique nas células da grade para fazer seus movimentos.
4-Continue alternando entre os jogadores até que haja um vencedor ou empate.
5-Divirta-se jogando o Jogo da Velha!
