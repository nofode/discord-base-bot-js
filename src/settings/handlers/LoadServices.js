// Modulações
import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export async function LoadServices({ client }) {
    // Obtendo o diretório atual no ambiente de módulos ES6
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // Lendo a pasta de Serviços
    const folders = await readdir(join(__dirname, '../../discord/services'));

    // Iterando por cada pasta de Serviços
    for (const folder of folders) {
        const folderPath = join(__dirname, '../../discord/services', folder);
        const files = await readdir(folderPath);

        // Iterando por cada arquivo dentro da pasta de Serviços
        for (const file of files) {
            if (!file.endsWith('.js')) continue;

            const filePath = join(folderPath, file);

            // Importando o serviço de forma dinâmica
            const { default: service } = await import(`file://${filePath}`);

            // Verificando se o serviço está ativo
            if (!service.active) {
                console.log(`🔴 \x1b[30m| \x1b[31m[EVENT-DISABLE] \x1b[30m| \x1b[37m${service.name}\x1b[0m`);
                continue;
            };

            // Registrando o evento no cliente
            if (!service.only) {
                client.on(service.eventName, (...args) => service.execute(...args, client));
            } else {
                client.once(service.eventName, (...args) => service.execute(...args, client));
            }

            console.log(`🟢 \x1b[30m| \x1b[33m[EVENT-ACTIVE] \x1b[30m| \x1b[37m${service.name}\x1b[0m`);
        }
    }
}