const Discord = require("discord.js")
module.exports = {
	name: 'earn',
	description: 'earn embed',
	execute(message, args) {

        if (message.author.id != "639701590604906497") return;

        const imageEmbed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/803108324689707018/853174102680797224/earn_coins.gif")
            .setColor("ccdddd");
        const embed = new Discord.MessageEmbed()
            .setDescription("<:s_dinogirlnom:852997980021719110><a:s_arrowright3:852998609087496232>**how to earn coins**\n\n<:dot:850008880896802846>be an active member\n<:dot:850008880896802846>use coin rewarding commands\n<:dot:850008880896802846>become a booster & earn 5k coins everyday\n--\n<:s_dinogirlmad:852998732047187968><a:s_arrowright3:852998609087496232>**commands**\n\n`.slut` - 5m cooldown\n`.crime` - 10m cooldown\n`.work` - 20m cooldown\n`.rob <user>` - 24h cooldown\n--\n<:s_emilianyan:852999824969826306><a:s_arrowright3:852998609087496232>**auto earn coins**\n\n<#802813250228060203> - 25 coins per min.\n<#802818235359166504> - 25 coins per min.\n<#847717654889758731> - 25 coins per min.\n<#850362750903517225> - 25 coins per min.\n<#850362712697208882> - 25 coins per min.\n<#850362780418179102> - 25 coins per min.\n<#850364382009753630> - 25 coins per min.\n<#850364412635119628> - 25 coins per min.")
            .setImage("https://cdn.discordapp.com/attachments/747748343119347783/853177160902246410/unknown.png")
            .setColor("ccdddd")

        message.channel.send(imageEmbed);
        message.channel.send(embed);
        message.delete();
	},
};