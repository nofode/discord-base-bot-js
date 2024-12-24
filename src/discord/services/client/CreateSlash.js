import { Service } from "#base";
import { Events } from "discord.js";

export default new Service({
    eventName: Events.InteractionCreate,
    name: 'Create Slash',
    active: true,
    only: false,

    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            if (!command.development) {
                if (interaction.user.id !== process.env.ownerId) return await interaction.reply({ ephemeral: true, content: '🛠️ | System under Development. ' });
            }

            await command.execute({ client, interaction })
                .catch((err) => {
                    console.log('❌ \x1b[30m| \x1b[31m[ERRO-COMMAND] \x1b[30m| \x1b[37m', err.message, '\x1b[0m');
                });
        }
    }
});