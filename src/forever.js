// Modulação do Discord
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';

// Modulação para Salvar e Puxar Informações
import 'dotenv/config';

// Modulação das Funções de conexão
import { LoadServices } from './settings/handlers/LoadServices.js';
import { LoadCommands } from './settings/handlers/LoadCommands.js';

// Importação do Client do Discord com os Intents e Partials
export const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)]
});

// Função para iniciar o bot
client.login(process.env.botToken)
    .then(() => {
        console.clear();
        console.log('🌐 \x1b[30m| \x1b[32m[Discord-Bot] \x1b[37mConnected\x1b[0m');

        // Irá executar as conexões
        LoadServices({ client });
        LoadCommands({ client });

        client.commands = new Collection();
    })
    .catch((err) => {
        console.log('🤖 \x1b[30m| \x1b[31m[Token-Invalid] \x1b[37mThe token is invalid');
    });