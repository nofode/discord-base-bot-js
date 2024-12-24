// Modulações
import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export async function LoadCommands({ client }) {
    // Obtendo o diretório atual no ambiente de módulos ES6
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // Lendo a pasta de Comandos
    const folders = await readdir(join(__dirname, '../../discord/commands'));

    // Iterando por cada pasta de Comandos
    for (const folder of folders) {
        const folderPath = join(__dirname, '../../discord/commands', folder);
        const files = await readdir(folderPath);

        // Iterando por cada arquivo dentro da pasta de Comandos
        for (const file of files) {
            if (!file.endsWith('.js')) continue;

            const filePath = join(folderPath, file);

            // Importando o comando de forma dinâmica
            const { default: command } = await import(`file://${filePath}`);

            if (!command?.name) continue;

            // Verificando se o nome do comando é válido
            if (!/^[a-z0-9-_]{1,32}$/.test(command.name)) {
                console.log(`🔴 \x1b[30m| \x1b[31m[COMMAND-NAME-INVALID] \x1b[30m| \x1b[37mComando ${command?.dev?.name} é inválido!\x1b[0m`);
                continue;
            }

            // Verificando se o comando está ativo
            if (!command.dev.active) {
                console.log(`🔴 \x1b[30m| \x1b[31m[COMMAND-DISABLE] \x1b[30m| \x1b[37m${command?.dev?.name}\x1b[0m`);
                continue;
            }

            // Adicionando o comando à coleção do cliente
            client.commands.set(command?.name, command);

            console.log(`🟢 \x1b[30m| \x1b[33m[COMMAND-ACTIVE] \x1b[30m| \x1b[37m${command?.dev?.name}\x1b[0m`);
        }
    }

    // Irá carregar todos os comandos ao novo servidor
    client.on('guildCreate', async (guild) => {
        try {
            await guild.commands.set([...client.commands.values()]);
            console.log(`🟢 \x1b[30m| \x1b[33m[COMMANDS SET] \x1b[30m| \x1b[37mComandos carregados para o guild ${guild.name}\x1b[0m`);
        } catch (error) {
            console.error(`🔴 \x1b[30m| \x1b[31m[ERROR] \x1b[30m| \x1b[37mErro ao carregar comandos para o guild ${guild.name}: ${error.message}\x1b[0m`);
        }
    });

    // Irá carregar todos os comandos para todos os servidores quando o bot estiver pronto
    client.on('ready', async () => {
        try {
            for (const guild of client.guilds.cache.values()) {
                await guild.commands.set([...client.commands.values()]);
                console.log(`🟢 \x1b[30m| \x1b[33m[COMMANDS SET] \x1b[30m| \x1b[37mComandos carregados para o guild ${guild.name}\x1b[0m`);
            }
        } catch (error) {
            console.error(`🔴 \x1b[30m| \x1b[31m[ERROR] \x1b[30m| \x1b[37mErro ao carregar comandos para todos os guilds: ${error.message}\x1b[0m`);
        }
    });
}