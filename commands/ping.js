const Discord = require("discord.js")
module.exports = {
	name: 'ping',
	description: 'sends bots ping',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`<a:loading:852809973510438922> pinging...`)
            .setColor("c3d9c3")
		message.reply(embed).then(m =>{       
              var ping = m.createdTimestamp - message.createdTimestamp;

              const embed2 = new Discord.MessageEmbed()
              .setDescription(`**ping:** ${ping}ms`)
              .setColor("c3d9c3")

              setTimeout(() => {
                m.edit(embed2)
              }, 3000);
          });
	},
};