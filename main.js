const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.prefix;
const ownerId = config.ownerId;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		const ping = "ping";
		const vanity = "vanity";
		const earn = "earn";
	client.commands.set(command.name, command);
}

client.on('ready', () => {

	const serversArray = [];
	const serversArray2 = [];
	let serverFinalArray = [];

	client.guilds.cache.forEach(async g => {

		serversArray.push(`**${g.name}** (${g.id})`)
		serversArray2.push(`${g.name} (${g.id})`)

		if (g.id === "802813250228060200" || g.id === "663590607981117452" || g.id === "760974599348551750") return;
		await console.log(`I left:\n${serversArray.join("\n")}`);
		await g.leave();

	});

	const settingsChannel = client.channels.cache.get(config.settingsChannel);
	const onlineEmbed = new Discord.MessageEmbed()
		.setAuthor(`I'm online in ${client.guilds.cache.size} servers!`)
		.setDescription(`> ${serversArray.join("\n> ")}`)
		.setColor("202225")
	console.log(`${client.user.username} is online in ${client.guilds.cache.size} servers:\n${serversArray2.join("\n")}`);
	settingsChannel.send(onlineEmbed);

	client.user.setPresence(
		{
			activity: {
				name: "over the locals",
				type: "WATCHING"
			  },
			status: 'dnd',
		}
	)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "say") {
		var argsSplit = args.slice();
		argsSplit.splice(0,1);

		const sayMsg = argsSplit.join(" ");
		const sayChannel = client.channels.cache.get(args[0]);

		sayChannel.send(sayMsg);
	}

	if (command === "si" || command === "serverinfo") {
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
	}

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(config.token);