# Backend do Trabalho Final de Desenvolvimento Web 1

Este projeto é a parte do backend do trabalho final da disciplina Desenvolvimento Web 1.

## Configuração do Ambiente

1. Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd devweb1-api
    ```

2. Instale as dependências:
    ```bash
    yarn
    ```
    

3. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente conforme o exemplo em `.env.example`.

4. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

## Scripts Disponíveis

- `npm run start`: Inicia a aplicação.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação.
- `npm run test`: Executa os testes.
- `npm run lint`: Executa o linter.

## Estrutura do Projeto

- `src/`: Contém o código fonte da aplicação.
- `prisma/`: Contém o esquema do Prisma e as migrações.
- `test/`: Contém os testes da aplicação.

## Tecnologias Utilizadas

- NestJS
- Prisma
- PostgreSQL
- TypeScript

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Desenvolvedores

- Matheus Xavier
- Eduardo Kaique