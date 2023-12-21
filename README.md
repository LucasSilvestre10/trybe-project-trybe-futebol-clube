# Trybe Futebol Clube

## Descrição do Projeto

Bem-vindo ao repositório do Trybe Futebol Clube (TFC)! Este projeto tem como objetivo criar um back-end dockerizado utilizando modelagem de dados com Sequelize. A ideia é desenvolver uma API por meio de métodos TDD e integrá-la, via docker-compose, às aplicações existentes para consumir um banco de dados.

### Fluxo 1: Teams (Times)

#### Requisitos

1. **Migration e Model para Tabela de Times:**
   - Foi criada uma migration e um model para a tabela de times em `/app/backend/src/database`.

2. **(TDD) Testes de Cobertura Inicial:**
   - Foram desenvolvidos testes cobrindo no mínimo 5% dos arquivos em `/app/backend/src`, com pelo menos 7 linhas cobertas.

3. **Endpoint /teams:**
   - O endpoint `/teams` foi implementado no back-end para retornar todos os times corretamente. A rota é do tipo GET e segue o modelo especificado.

4. **(TDD) Testes de Cobertura Avançada:**
   - Os testes de integração da rota `/teams` foram estendidos, cobrindo no mínimo 10% dos arquivos em `/app/backend/src` com pelo menos 19 linhas cobertas.

5. **Endpoint /teams/:id:**
   - Foi implementado o endpoint `/teams/:id` no back-end para retornar dados de um time específico.

### Fluxo 2: Users e Login (Pessoas Usuárias e Credenciais de Acesso)

#### Requisitos

6. **Migration e Model para Tabela de Pessoas Usuárias:**
   - Foi criada uma migration e um model para a tabela de pessoas usuárias em `/app/backend/src/database`.

7. **(TDD) Testes de Cobertura Inicial:**
   - Foram desenvolvidos testes cobrindo no mínimo 15% dos arquivos em `/app/backend/src`, com pelo menos 25 linhas cobertas.

8. **Endpoint /login:**
   - O endpoint `/login` foi implementado no back-end, permitindo acesso com dados válidos no front-end.

9. **(TDD) Testes de Cobertura Avançada:**
   - Os testes de integração da rota `/login` foram estendidos, cobrindo no mínimo 20% dos arquivos em `/app/backend/src` com pelo menos 35 linhas cobertas.

10. **Validações Adicionais no /login:**
    - Foram implementadas validações para não permitir acesso sem informar e-mail ou senha.

11. **(TDD) Testes de Cobertura Avançada:**
    - Os testes de integração da rota `/login` foram estendidos, cobrindo no mínimo 30% dos arquivos em `/app/backend/src` com pelo menos 45 linhas cobertas.

12. **Middleware de Validação para o Token e Endpoint /login/role:**
    - Foi desenvolvido um middleware de validação para o token e o endpoint `/login/role`, retornando os dados corretamente no front-end.

### Fluxo 3: Matches (Partidas)

#### Requisitos

13. **Migration e Model para Tabela de Partidas:**
    - Foi criada uma migration e um model para a tabela de partidas em `/app/backend/src/database`.

14. **(TDD) Testes de Cobertura Inicial:**
    - Foram desenvolvidos testes cobrindo no mínimo 45% dos arquivos em `/app/backend/src`, com pelo menos 70 linhas cobertas.

15. **Endpoint /matches:**
    - O endpoint `/matches` foi implementado, exibindo os dados corretamente na tela de partidas no front-end.

16. **Filtragem de Partidas em Andamento e Finalizadas:**
    - Implementou-se o filtro para partidas em andamento e finalizadas no endpoint `/matches`.

17. **Endpoint /matches/:id/finish:**
    - Foi implementado o endpoint `/matches/:id/finish`, possibilitando finalizar uma partida no banco de dados.

18. **Endpoint /matches/:id:**
    - Foi implementado o endpoint `/matches/:id` que permite atualizar partidas em andamento.

19. **(TDD) Testes de Cobertura Avançada:**
    - Os testes de integração da rota `/matches` foram estendidos, cobrindo no mínimo 60% dos arquivos em `/app/backend/src` com pelo menos 80 linhas cobertas.

20. **Endpoint /matches - Cadastrar Nova Partida em Andamento:**
    - Foi implementado o endpoint `/matches` para cadastrar uma nova partida em andamento no banco de dados.

21. **Validações ao Inserir Nova Partida:**
    - Adicionaram-se validações para não permitir inserir uma partida com times iguais ou com um time que não existe na tabela de times.

### Habilidades Técnicas

- Node.js
- Express.js
- Sequelize
- Docker
- PostgreSQL
- TypeScript
- Testes com Jest
- TDD (Desenvolvimento Orientado por Testes)
- Criptografia de Senhas
- Middleware
- Manipulação de Dados em Bancos de Dados Relacionais
- API REST
