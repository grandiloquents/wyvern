const Discord = require("discord.js")
module.exports = {
	name: 'vanity',
	description: 'vanity embed',
	execute(message, args) {

        if (message.author.id != "639701590604906497") return;

        const imageEmbed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/803108324689707018/853175508165197854/vanity.gif")
            .setColor("ced76d");
        const embed = new Discord.MessageEmbed()
            .setDescription("<:s_cowgirlsipmilk:852994926026555502><a:s_arrowright:852993848245878794>**about vanity roles**\n\n<:dot:850008880896802846>show off your wealth to other members\n<:dot:850008880896802846>use society coin ₍ <a:s_societyCoin:851872229180571658> ₎ to purchase vanity roles\n<:dot:850008880896802846>all vanity roles will remain at the top of the member list\n--\n<:s_babybottle:852995402817994752><a:s_arrowright:852993848245878794>**booster perk**\n<:dot:850008880896802846>type `.collect` every 24h\n--\n<a:s_arrowright2:852996194581217330>type `.bal` in <#847717746116001792> to know your coin balance!")
            .setImage("https://cdn.discordapp.com/attachments/747748343119347783/853176524891357195/unknown.png")
            .setColor("ced76d")

        message.channel.send(imageEmbed);
        message.channel.send(embed);
        message.delete();
	},
};