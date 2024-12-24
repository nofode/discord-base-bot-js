# Discord Base Bot V14

Este repositório é uma **base para criar bots do Discord**, pensada para ajudar você a começar rapidamente. Com uma estrutura modular e fácil de personalizar, é ideal para quem quer colocar um bot em funcionamento sem complicação, seja para diversão, automação ou qualquer outro projeto no Discord.

## Features

- Estrutura pronta para criar bots no Discord com a poderosa biblioteca `discord.js`.
- Suporte fácil a variáveis de ambiente usando `dotenv`, para não deixar informações sensíveis no código.
- Modularidade que permite personalizar o bot de maneira simples.
- Desenvolvimento facilitado com `nodemon` para recarregar automaticamente sempre que você mudar algo no código.
- Monitoramento de latência simples com a biblioteca `ping`.

## Como usar

1. **Clone o repositório:**
   Primeiro, faça o clone do repositório para sua máquina local:
   ```bash
   git clone https://github.com/nofode/discord-bot-basev14.git
   cd @base-bot-discord
   ```

2. **Instale as dependências:**
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, execute:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione seu **token** do Discord:
   ```
   DISCORD_TOKEN=seu_token_aqui
   ```

4. **Inicie o bot em modo de desenvolvimento:**
   Para rodar o bot e permitir que ele recarregue automaticamente quando você modificar o código, use:
   ```bash
   npm run dev
   ```

   Agora o bot estará rodando e você pode começar a desenvolver!

## Dependências

Aqui estão as bibliotecas que você vai usar:

- **@magicyan/discord**: Uma biblioteca auxiliar para trabalhar com o Discord.
- **discord.js**: A biblioteca principal para interagir com a API do Discord.
- **dotenv**: Carrega as variáveis de ambiente do arquivo `.env`.
- **ping**: Útil para medir a latência do bot.
- **nodemon** (dev): Ferramenta que reinicia o bot automaticamente durante o desenvolvimento.

## Scripts

- **dev**: Inicia o bot em modo de desenvolvimento com `nodemon`, que vai monitorar alterações no código e reiniciar o bot automaticamente.

  Comando: `npm run dev`

## Autor

- **Nome**: Nathan
- **GitHub**: [Nathan](https://github.com/nofode/)
- **Discord**: [nofode](https://discord.gg/login)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Se você quiser contribuir ou adaptar esse projeto para suas necessidades, fique à vontade! Eu adoraria ver o que você cria com essa base.
