# DS Sales

Este projeto foi desenvolvido no curso Spring React da <a href="https://devsuperior.com.br/" target="_blank">DevSuperior</a> no módulo de Dashboard, ele consiste em uma simulação de um dashboard de vendas implementando as tecnologias mais atilizadas do mercado, abaixo segue uma descrição resumida das tecnologias:

## **Backend**

- Linguagem de programação: Java 11
- Framework: Spring Boot 2.4.x
- Projeto em camadas
  - Controladores REST
  - Serviços
  - Acesso a dados (Repository)
- Padrão DTO
- Tratamento de exceções
- SQL e JPQL
- Spring Data JPA
  - Query methods

**Implantação e CI/CD**

- Heroku

## **Frontend**

- Linguagem de programação: Typescript
- Framework: React

**Layout**

- Layout
  - HTML
  - CSS
    - Flexbox
    - Bootstrap
    - Responsividade

**Componentes**

- Flat Picker

  - Range data

- React Apex Chart
  - Pie Chart
  - Bar Chart

**Integração com API**

- Props
- Axios
- React Hooks
- Loaders

**Paginação e filtros**

- Listagem de dados
- Comunicação entre componentes com eventos (padrão observer)
- Integração de libs com React Hook Form
  - React Currency Input Field
  - React Pagination
- Filtragem de dados
- Controle de referência com hook useMemo

**Implantação com CI/CD**

- Netlify

## Imagem o projeto

![Home page](/images/page.jpg)

## Executando o projeto

Baixe o código fonte e o extraia em seu diretório de preferência, exemplo (C:\Workspaces).

### Backend

Abra a pasta backend com a sua IDE Java de preferência, recomendação (Spring Tools ou VS Code), aguarde o Maven baixar as dependências e depois execute o projeto.

### Frontend

Abra a pasta frontend no seu terminal e execute os seguintes comandos:

1. Instalando as dependências

```
yarn
```

2. Rodando o projeto

```
yarn start
```

## Link do projeto implantado

<a href="https://acsousa-dssales.netlify.app/" target="_blank">DS Sales</a>

**Observação**

Pelo fato do backend estar implantado no Heroku no modo free, pode levar um tempo para aparecer os dados, isso ocorre porque o servidor hiberna se ficar inativo por mais de 30 minutos.
