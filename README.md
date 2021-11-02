# Projeto 4Food 
![Tela Inicial](https://user-images.githubusercontent.com/86701927/139736513-c05e5ab1-9a65-4c19-9692-cad07c1a6f0b.png)

# 📄 Sobre

Projeto final do curso de Front-End da Labenu. A ideia foi desenvolver um aplicativo parecido com o Ifood, onde o usuário faz os pedidos, acessa o carrinho de compras, finaliza a compra, altera seus dados e verifica o tempo de espera do pedido. 

# 🔗 Link para acessar

- link


# 📲 Apresentação do aplicativo

- gifs 

# 🛠 Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [API](https://www.postman.com/home)
- [Material UI](https://mui.com/pt/getting-started/installation/)
- [Axios](https://axios-http.com/docs/intro)
- [Metodologias Ágeis](https://trello.com/b/5FldI0TK/kanban-quadro-modelo)

# 📋 Planejamento

- Foi utitilizado o Kanban como metodologia ágil.
- Aplicações com múltiplas rotas utilizando React Router;  Autenticação;  Uso de bibliotecas de UI;  Formulários com Validação;  Hooks useState e useEffect.

- API utilizada para realizar este projeto : [LabeFoods](https://documenter.getpostman.com/view/7549981/SWTEdGtT)
 
### Páginas 4food:
 - Área pessoal de Login e Cadastro.
 - Home com restaurantes e tipos de comidas.
 - Pedido e Confirmação com detalhes do pedido. 
 - Perfil com dados do cliente.
 - Meu Carrinho com informações dos pedidos, quantidade de itens, formas de pagamentos e valores.
 
### 🎨 Estilizações

- [Paleta de Cores](https://coolors.co/e8222e-fdfdfd-b8b8b8-000000)

- Fonts: 
**Text Style**
- Roboto, Regular, 16px 
- Letter spacing: -0.4px

**Text Style 2**
- SFProText, Regular, 12px

**Text Style 3**
- Roboto, Regular, 16px
- Center, Letter spacing: -0.4px

# 🧩 Wireframe
![4food](https://user-images.githubusercontent.com/86701927/139914521-33fddf9a-ec20-42db-b76d-a0ad95059708.png)


# 💻 Funcionalidades

### Fluxo de Login/Cadastro:
- O usuário deve ser capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço.
- Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de lista de restaurantes.

### Busca e Seleção de Restaurantes:
- O usuário deve ser capaz de visualizar uma lista com todos os restaurantes.
- O usuário deve ser capaz de buscar um restaurante por nome.
- O usuário deve ser capaz de filtrar os restaurantes por categoria.
- O usuário deve ser capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio.

### Cardápio do Restaurante:
- O usuário deve ser capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço).
- O usuário deve ser capaz de visualizar os pratos do restaurante, divididos em categorias (exemplo: principais, sobremesas, entradas, etc).
- O usuário deve ser capaz de visualizar as informações de cada prato (foto, nome, descrição, preço).
- O usuário deve ser capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato.
- O usuário deve ser capaz de remover itens do carrinho.

### Carrinho e Finalizar Compra:
- O usuário deve ser capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio".
- O usuário deve visualizar, no topo da tela, o endereço de entrega.
- O usuário deve visualizar o preço total da compra, que deve ser corretamente calculado de acordo com o preço e quantidade de cada item adicionado.
- O usuário deve ser capaz de selecionar uma forma de pagamento dentre as opções de cartão e dinheiro.
- O usuário deve ser capaz de concluir um pedido e, ao fazê-lo, deve ver um banner de "Pedido em Andamento" com os dados do pedido (esse banner fica ativo durante X minutos, sendo X o tempo de entrega do restaurante).

### Perfil, Editar Perfil e Histórico de Pedidos:
- O usuário deve ser capaz de visualizar e editar seus dados pessoais e endereço
- Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- O usuário deve ser capaz de visualizar o seu histórico de pedidos concluídos (após o tempo de entrega do estabelecimento, o seu pedido aparece nessa lista?).


# 💾️ Como baixar/testar o projeto

- Antes de começar, você irá precisar instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/) + [Visual Studio Code](https://code.visualstudio.com/).

```# Versões mínimas ou superiores.
$ node -v
v12.19.0

$ npm -v
6.14.5
```

- Para configurar, no GitBash digite os seguinte códigos:

```# Clonar o repositório
$ git clone "https://github.com/future4code/maryam-labe-food6"

#Entrar no diretório
$ cd ./maryam-labe-food6

#Abrir projeto no VsCode ou com seu prompt de comando de preferência
code . ||  cd ./maryam-labe-food6 (Passo acima) 

#Com o terminal aberto rodar o comando
$ npm install (para instalar as dependências necessárias)

#Agora só rodar o projeto com o comando
$ npm run start

#Pronto projeto abrirá em seu navegador padrão
Agora é só testar em seu navegador!
```


# 👩‍💻 Desenvolvedores

![Geisy](https://user-images.githubusercontent.com/86701927/139923314-24f11459-68da-4387-941b-a91640ec2467.jpg) | ![Leo](https://user-images.githubusercontent.com/86701927/139923382-99f769b7-0ef7-43e0-98df-bce6da35a4fc.jpg) | ![Lucas](https://user-images.githubusercontent.com/86701927/139923470-4b05d792-4b33-4bb1-b3bc-71950c7dbb47.JPG) | ![Murilo](https://user-images.githubusercontent.com/86701927/139923503-e4ea38cb-f999-42d6-9953-132a146fda0c.jpg) | ![Sarah](https://user-images.githubusercontent.com/86701927/139923533-9d3064bf-071e-4651-840f-4434d2b24a7b.jpg)
:------: | :------: | :------: | :------: | :------:
[Geisylania Lopes](https://www.linkedin.com/in/geisy-lopes-05b3b5219) | [Leonardo Souza Gomes](https://www.linkedin.com/in/leonardo-gomes-353593182) | [Lucas Homero Pimentel](https://www.linkedin.com/in/lucas-homero-19b97581) | [Murilo Terenciani Carolino](https://www.linkedin.com/in/muriloterenciani) | [Sarah Romanhol Falconiere](https://www.linkedin.com/in/sarahromanhol)

👋🏽 Entre em contato!

```Voltar ao Topo```
