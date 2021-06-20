const Discord = require("discord.js")
const client = require("vassal/main.js")
module.exports = {
	name: 'addmanager',
	description: 'add pm/am role to someone',
	execute(message, args) {
        const role = message.content.split(" ")[1]
        const helpEmbed = new Discord.MessageEmbed()
            .setDescription("**Usage:**\n```\n??addmanager <pm/am> <mention/id>\n```")
            .setColor("#202225");

        if (!role) return message.channel.send(helpEmbed);

        let mention = message.mentions.users.first();
        try {
            if (!mention) {
                mention = client.users.cache.get(message.content.split(" ")[2]);
            }
          }
        catch(err) {
            const errEmbed = new Discord.MessageEmbed()
                .setDescription("An error occured while executing this command. Please check if you provided a valid user ID.")
                .setColor("#202225");
            message.channel.send(errEmbed);
            console.log(err);
        } 

        switch (role) {
            case "pm":
                mention.roles.add("849647747304390666");
                mention.roles.add("849627497795551232");
                mention.roles.add("849647734872866846");
                
                const highestRole = mention.roles.highest;
                const highErrEmbed = new Discord.MessageEmbed()
                    .setDescription("Unable to change nickname due to role hierarchy problems.")
                    .setColor("#202225");
                if(!highestRole.editable) return message.channel.send(highErrEmbed);

                mention.setNickname(`am・${mention.displayName}`);

                const successEmbed = new Discord.MessageEmbed()
                    .setDescription(`Successfully added am roles to ${mention}!`)
                    .setColor("#202225")

                message.channel.send(successEmbed);

                break;
            case "am":
                mention.roles.add("849647751662534716");
                mention.roles.add("849627497795551232");
                mention.roles.add("849647734872866846");

                const highestRole2 = mention.roles.highest;
                const highErrEmbed2 = new Discord.MessageEmbed()
                    .setDescription("Unable to change nickname due to role hierarchy problems.")
                    .setColor("#202225");
                if(!highestRole2.editable) return message.channel.send(highErrEmbed2);

                mention.setNickname(`am・${mention.displayName}`);

                const successEmbed2 = new Discord.MessageEmbed()
                    .setDescription(`Successfully added am roles to ${mention}!`)
                    .setColor("#202225")
                message.channel.send(successEmbed2);

                break;

            default:
                message.channel.send(helpEmbed);
                break;
        }
	},
};
