const Discord = require("discord.js")
const client = require("../main.js");
module.exports = {
	name: 'say',
	description: 'say smth in channel',
	execute(message, args) {
        let argsSplit = args.slice();
		argsSplit.splice(0,1);

		const sayMsg = argsSplit.join(" ");
		const sayChannel = args[0] || client.channels.cache.get(args[0]);
        const errEmbed = new Discord.MessageEmbed()
            .setDescription("An error occured while executing this command. Please check if you provided a valid channel.")
            .setColor("#202225");

        if (!sayChannel) return message.channel.send(errEmbed);

		sayChannel.send(sayMsg);
	},
};