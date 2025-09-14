# Podcast Manager

Plataforma para organização e gerenciamento de podcasts, inspirada no estilo Netflix. Desenvolvida com Node.js, TypeScript, HTTP module (sem frameworks), tsup, tsx e @types/node.

## Funcionalidades

- Listar episódios de podcasts em sessões de categorias
- Filtrar episódios por nome de podcast

## Endpoints

### Listar episódios por categoria

- **GET** `/list`
- **Resposta:**

  ```json
  [
    {
      "podcastName": "flow",
      "episode": "CBUM - Flow #319",
      "videoId": "pQSuQmUfS30",
      "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
      "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
      "podcastName": "flow",
      "episode": "RUBENS BARRICHELLO - Flow #339",
      "videoId": "4KDGTdiOV4I",
      "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
      "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
      "categories": ["esporte", "corrida"]
    }
  ]
  ```

```

### Filtrar episódios por nome de podcast

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.
- **Exemplo de requisição:** `GET /episode?podcastName=flow`

## Tecnologias Utilizadas

- TypeScript
- Tsup
- Tsx
- Node.js
- @types/node

## Como Utilizar

1.  Instale as dependências usando `npm install`.
2.  Inicie o servidor executando `npm run dev` para desenvolvimento ou `npm run build` e `npm start` para produção.
3.  Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a MIT License.
```
