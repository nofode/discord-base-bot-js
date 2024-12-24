import { Command } from "#base";
import { createEmbed } from "@magicyan/discord";
import ping from "ping";

export default new Command({
    dev: {
        name: 'Ping Command',
        development: true,
        active: true,
    },
    name: 'ping',
    category: 'utilities',
    description: 'Veja meu ping atual...',

    async execute({ client, interaction }) {
        await interaction.deferReply();

        const dcping = await ping.promise.probe('discord.com');

        const newEmbed = new createEmbed({
            author: {
                name: client.user.username,
                iconURL: client.user.displayAvatarURL()
            },
            title: 'Ping',
            color: 'Blurple',
            description: '-# Se você gostou desse bot, e se você quiser, é só vir para o meu [GitHub](https://github.com/nofode), Baby 💙',
            fields: [
                { name: 'Bot Ping', value: `- \`${client.ws.ping} ms\``, inline: true },
                { name: 'Discord Ping', value: `- \`${dcping.time} ms\``, inline: true }
            ],
            footer: {
                text: 'Made By Nathan | https://github.com/nofode',
                iconURL: 'https://cdn.discordapp.com/attachments/1307542731987619881/1320920607042441339/6892622-discord-logo-icons-editorial-collection-gratis-vetor.jpg?ex=676b5aae&is=676a092e&hm=20542bc18c309b26c3407b12031eee17587307d1995010be529765cfb7015241&'
            }
        });

        await interaction.editReply({ embeds: [newEmbed] });

        await interaction.followUp({ content: `${interaction.user}` })
            .then((msg) => msg.delete())
            .catch(() => { })
    }
});