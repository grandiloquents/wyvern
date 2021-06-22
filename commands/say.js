const Discord = require("discord.js")
const client = require("../main.js");
module.exports = {
	name: 'say',
	description: 'say smth in channel',
	execute(message, args) {
	const helpEmbed = new Discord.MessageEmbed()
            .setDescription("**Usage:**\n```\n??say <channel/id> <message>\n```")
            .setColor("#202225");
	if (!args[0]) return message.channel.send(helpEmbed);
        let argsSplit = args.slice();
	argsSplit.splice(0,1);
	const sayMsg = argsSplit.join(" ");
	const sayChannel = client.channels.cache.get(args[0].substring(2).substring(0,18)) || client.channels.cache.get(`${args[0]}`)
	const errEmbed2 = new Discord.MessageEmbed()
            .setDescription("An error occured while executing this command. Please check if you provided a valid message.")
            .setColor("#202225");

        if (!sayChannel) return message.channel.send(args);
	if (!sayMsg) return message.channel.send(errEmbed2);

	sayChannel.send(sayMsg);
	},
};
