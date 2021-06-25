const Discord = require("discord.js")
const client = require("../main.js")
module.exports = {
	name: 'addmanager',
	description: 'add pm/am role to someone',
	execute(message, args) {
		
	if (!message.member.hasPermission('MANAGE_ROLES')) return;
		
        const role = message.content.split(" ")[1]
        const helpEmbed = new Discord.MessageEmbed()
            .setDescription("**Usage:**\n```\n??addmanager <pm/am> <mention/id>\n```")
            .setColor("#202225");

        if (!role) return message.channel.send(helpEmbed);

        switch (role) {
            case "pm":

                let pmMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(message.content.split(" ")[2]))

                if (!pmMember) {
                    const errEmbed = new Discord.MessageEmbed()
                        .setDescription("An error occured while executing this command. Please check if you provided a valid user ID.")
                        .setColor("#202225");
                    message.channel.send(errEmbed);
                }
			
		const alrHasEmbed = new Discord.MessageEmbed()
                    .setDescription("User already has the roles.")
                    .setColor("#202225");

                if (pmMember.roles.cache.has("849647747304390666") && pmMember.roles.cache.has("849627497795551232") && pmMember.roles.cache.has("849647734872866846")) return message.channel.send(alrHasEmbed);
			
		pmMember.roles.add("849647747304390666");
                pmMember.roles.add("849627497795551232");
                pmMember.roles.add("849647734872866846");

                pmMember.setNickname(`pm・${pmMember.user.username}`);

                const successEmbed = new Discord.MessageEmbed()
                    .setDescription(`Successfully added pm roles to ${pmMember}!`)
                    .setColor("#202225")

                message.channel.send(successEmbed);

                break;
            case "am":

                let amMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(message.content.split(" ")[2]))

                if (!amMember) {
                    const errEmbed = new Discord.MessageEmbed()
                        .setDescription("An error occured while executing this command. Please check if you provided a valid user ID.")
                        .setColor("#202225");
                    message.channel.send(errEmbed);
                }
			
		const alrHasEmbed2 = new Discord.MessageEmbed()
                    .setDescription("User already has the roles.")
                    .setColor("#202225");

                if (amMember.roles.cache.has("849647751662534716") && amMember.roles.cache.has("849627497795551232") && amMember.roles.cache.has("849647734872866846")) return message.channel.send(alrHasEmbed2);
			
                amMember.roles.add("849647751662534716");
                amMember.roles.add("849627497795551232");
                amMember.roles.add("849647734872866846");

                amMember.setNickname(`am・${amMember.user.username}`);

                const successEmbed2 = new Discord.MessageEmbed()
                    .setDescription(`Successfully added am roles to ${amMember}!`)
                    .setColor("#202225")
                message.channel.send(successEmbed2);

                break;

            default:
                message.channel.send(helpEmbed);
                break;
        }
	},
};
