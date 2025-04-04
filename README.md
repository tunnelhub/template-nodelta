# Template - Fluxo de Integração Sem Delta

## NodeJS / Typescript

Este é um template básico para automações do tipo "Sem Delta". Use-o como ponto de partida para sua automação.
O fluxo de integração "Sem Delta" extrai dados de uma ou mais fontes e processa todos os itens. Ele é projetado para
máxima flexibilidade com logs individuais por entrada.

### Configuração padrão:

* Ambiente: nodejs22.x
* Memória: 512mb
* Timeout: 30s

Você pode personalizar essas configurações no arquivo **tunnelhub.yml**.

### Instruções:

* Você pode instalar todas as dependências com `npm install` ou `yarn`.
* Sua lógica principal está no arquivo `src/index.ts`.
* Você pode verificar nosso teste de exemplo na pasta `__tests__`. Nossos testes são escritos
  usando [Jest](https://www.npmjs.com/package/jest).
* Para rodar os testes, basta executar `yarn run test`
* Para fazer o deploy da sua automação, compacte todo o seu projeto em um arquivo zip. Use `yarn run build` para
  transpilar todo o seu código e
  bibliotecas usando esbuild e salvá-los na pasta `dist`.
* Consulte nossa [documentação](https://docs.tunnelhub.io) para mais informações.

Para fazer o deploy, execute o comando:

* `yarn run build && th deploy-automation --env ENVNAME --message "Mensagem do deploy"`

Para conveniência, alguns scripts auxiliares foram criados:

* Para ambiente DEV: `yarn run deploy:dev --message "Mensagem do deploy"`
* Para ambiente PRD: `yarn run deploy:prd --message "Mensagem do deploy"`  
