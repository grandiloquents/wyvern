const Discord = require("discord.js")
const client = require("../main.js");
module.exports = {
	name: 'serverinfo',
	description: 'server info command',
	execute(message, args) {
        const siEmbed = new Discord.MessageEmbed()
            .setTitle(message.guild.name)
            .addFields({
                name: "server info",
                value: `✎ . . ⃕**owner:** ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} (<@${message.guild.owner.user.id}>)\n➭¹ **voice region:** ${message.guild.region}\n✎ . . ⃕**verification:** ${message.guild.verificationLevel.toLocaleLowerCase()}`
            },
            {
            name: "counters",
            value:`✎ . . ⃕**member:** ${message.guild.memberCount}\n➭¹ **channel:** ${message.guild.channels.cache.size}\n✎ . . ⃕**role:** ${message.guild.roles.cache.size}`
            })
            .setColor("c3d9c3")
            .setThumbnail(`${message.guild.iconURL()}`)
            .setImage("https://cdn.discordapp.com/attachments/747748343119347783/850024231055523880/unknown.png")
            .setFooter(`server id: ${message.guild.id}`)

        message.channel.send(siEmbed);
	},
};