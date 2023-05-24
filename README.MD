# 🏡 Meu CRUD minha Vida
Este projeto consiste em um CRUD , que pode servir de base para diversos projetos de Front-end , assim uma pessoa desenvolvedora de Front-end pode ter o gostinho de integrar seu front com um back-end. 

## 📚 Bibliotecas utilizadas
- Express 4.17.3
- Mongoose 6.2.6
- Cors

## 🛠 Como usar
- Iniciar o Git.
- Clone este repositório com git clone.
- Instale as dependências do projeto com npm install.
- Inicie o projeto com npm start.

## 🗝 Postman
- Se quiser testar as rotas foi adcionado ao projeto uma Coleção de metodos , este arquivo esta dentro da pasta *PostmanCollection*. 

## 📗 MongoDB

Crie um arquivo "*.env*"para armazenar as variaveis de ambiente. 

No caso de um servidor local: 

```bash
STRING_CONEXAO_DB = "mongodb://127.0.0.1:27017/Dados"
```
Para conectar-se ao MongoDB Atlas a string de conexão deve seguir esse padrão:

```bash
STRING_CONEXAO_DB = "mongodb+srv://Usuario:*password*@*Cluster*.xgrmd7m.mongodb.net/*Base-de-Dados*"
```
 
## 🔀 Rotas

### GET /dados/listar

Descrição: Retorna uma lista de todos os dados cadastrados.

### POST /dados/cadastrar

Descrição: Cadastra um novo dado.
Exemplo de JSON para requisição:

```JSON
{
  "campoString": "Exemplo de String",
  "campoNumber": 123,
  "campoBoolean": true,
  "campoDate": "2023-05-22T00:00:00.000Z",
  "campoArray": [1, 2, 3],
  "campoObject": { "chave": "valor" }
}
```

### PUT /dados/atualizar/:id

Descrição: Atualiza um dado existente pelo ID.
Exemplo de JSON para requisição:

```JSON 
{
  "campoString": "Nova String"
}
```

### GET /dados/porID/:id

Descrição: Retorna um dado existente pelo ID.

### DELETE /dados/porID/:id

Descrição: Deleta um dado existente pelo ID.

## Um CRUD para chamar de seu.

O intuito desse projeto é servir de base para teste do Front-end por tanto você pode modelar um dado que deseja armazenar no banco de dados.

- Abra o arquivo *src/models/dadosSchema.js* no seu editor de código.
- Observe a estrutura do esquema definido no arquivo. Cada campo possui um nome e um tipo associado.
- Para adicionar um novo campo, você pode seguir o padrão existente e adicionar uma nova propriedade ao objeto do esquema. Por exemplo, se você deseja adicionar um campo de texto chamado campoTexto, você pode adicionar o seguinte código:

```Javascript 
campoTexto: {
  type: String,
  required: [true, "Campo Texto requerido"]
}
```
Certifique-se de fornecer um nome exclusivo para o novo campo e definir o tipo correto (por exemplo, String, Number, Boolean, Date, Array, Object, etc.).
- Após fazer as alterações desejadas no esquema, salve o arquivo.
- Agora você pode utilizar o novo campo adicionado para armazenar os dados desejados na coleção "Dados".