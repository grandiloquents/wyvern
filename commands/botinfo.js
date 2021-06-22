const Discord = require("discord.js")
const client = require("../main.js");
const moment = require("moment");
require("moment-duration-format");
const packageJson = require("../package.json");
const djsV = packageJson.dependencies["discord.js"];
const version = packageJson.version;
const npmV = packageJson["npm-version"];
const config = require("../config.json");
module.exports = {
	name: 'bi',
	description: 'bots info',
	execute(message, args) {
        const duration = moment.duration(client.uptime).format("D[d] H[h] m[m] s[s]");
        const botOwner = message.guild.members.cache.get(`${config.ownerId}`);

        const infoEmbed = new Discord.MessageEmbed()
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setAuthor(`${client.user.tag}`)
            .addFields(
                {
                    name: "owner:",
                    value: `${botOwner.user.tag}`,
                    inline: true
                },
                {
                    name: "servers:",
                    value: `${client.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: "users:",
                    value: `${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: "version:",
                    value: `v${version}`,
                    inline: true
                },
                {
                    name: "npm version:",
                    value: `v${npmV}`,
                    inline: true
                },
                {
                    name: "discord.js:",
                    value: `v${djsV}`,
                    inline: true
                },
            )
            .setFooter(`uptime: ${duration}`)

        message.channel.send(infoEmbed)

    },
};