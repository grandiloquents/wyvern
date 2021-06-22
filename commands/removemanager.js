const Discord = require("discord.js")
const client = require("../main.js")
module.exports = {
	name: 'removemanager',
	description: 'remove pm/am role from someone',
	execute(message, args) {
		
	if (!message.member.hasPermission('MANAGE_ROLES')) return;
		
        const role = message.content.split(" ")[1]
        const helpEmbed = new Discord.MessageEmbed()
            .setDescription("**Usage:**\n```\n??removemanager <pm/am> <mention/id>\n```")
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
                    .setDescription("User doesn't have the roles.")
                    .setColor("#202225");

                if (!pmMember.roles.cache.has("849647747304390666") && !pmMember.roles.cache.has("849627497795551232") && !pmMember.roles.cache.has("849647734872866846")) return message.channel.send(alrHasEmbed);
			
		pmMember.roles.remove("849647747304390666");
                pmMember.roles.remove("849627497795551232");
                pmMember.roles.remove("849647734872866846");
                
                const userHighestRole = pmMember.roles.highest;
                const botHighestRole = message.guild.me.roles.highest;
                const highErrEmbed = new Discord.MessageEmbed()
                    .setDescription("Unable to change nickname due to role hierarchy problems.")
                    .setColor("#202225");
                if(botHighestRole < userHighestRole) return message.channel.send(highErrEmbed);

                pmMember.setNickname(`${pmMember.user.username}`);

                const successEmbed = new Discord.MessageEmbed()
                    .setDescription(`Successfully removed pm roles from ${pmMember}!`)
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
                    .setDescription("User doesn't have the roles.")
                    .setColor("#202225");

                if (!amMember.roles.cache.has("849647751662534716") && !amMember.roles.cache.has("849627497795551232") && !amMember.roles.cache.has("849647734872866846")) return message.channel.send(alrHasEmbed2);
			
                amMember.roles.remove("849647751662534716");
                amMember.roles.remove("849627497795551232");
                amMember.roles.remove("849647734872866846");

                const userHighestRole2 = amMember.roles.highest;
                const botHighestRole2 = message.guild.me.roles.highest;
                const highErrEmbed2 = new Discord.MessageEmbed()
                    .setDescription("Unable to change nickname due to role hierarchy problems.")
                    .setColor("#202225");
                if(botHighestRole2 < userHighestRole2) return message.channel.send(highErrEmbed2);

                amMember.setNickname(`${amMember.user.username}`);

                const successEmbed2 = new Discord.MessageEmbed()
                    .setDescription(`Successfully removed am roles from ${amMember}!`)
                    .setColor("#202225")
                message.channel.send(successEmbed2);

                break;

            default:
                message.channel.send(helpEmbed);
                break;
        }
	},
};
