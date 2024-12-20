const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.prefix;
const ownerId = config.ownerId;
module.exports = client;
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		const ping = "ping";
		const addmanager = "addmanager";
		const removemanager = "removemanager";
		const botinfo = "botinfo";
		const bi = "bi"
		const say = "say";
		const si = "si";
		const serverinfo = "serverinfo";
	client.commands.set(command.name, command);
}

client.on('ready', () => {

	const settingsChannel = client.channels.cache.get(config.settingsChannel);
	const serversArray = [];
	const serversArray2 = [];

	client.guilds.cache.forEach(async g => {

		serversArray.push(`**${g.name}** (${g.id})`)
		serversArray2.push(`${g.name} (${g.id})`)

		if (g.id === "802813250228060200" || g.id === "663590607981117452" || g.id === "760974599348551750" || g.id === "853177494889955339") return;
			const leaveEmbed = new Discord.MessageEmbed()
				.setDescription(`I left **${g.name}** (${g.id})`)
				.setColor("202225")
			console.log(`I left ${g.name} (${g.id})`);
			settingsChannel.send(leaveEmbed);
			g.leave();

	});

	const onlineEmbed = new Discord.MessageEmbed()
		.setAuthor(`I'm online in ${client.guilds.cache.size} servers!`)
		.setDescription(`> ${serversArray.join("\n> ")}`)
		.setColor("202225")
	console.log(`${client.user.username} is online in ${client.guilds.cache.size} servers:\n${serversArray2.join("\n")}`);
	settingsChannel.send(onlineEmbed)

	client.user.setPresence(
		{
			activity: {
				name: "over the locals",
				type: "WATCHING"
			  },
			status: 'dnd',
		}
	)
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  	const newRole = newMember.roles.cache
  		.filter(r => !oldMember.roles.cache.has(r.id))
  		.first()

	if (oldMember.roles.cache.has("849647747304390666") && !newMember.roles.cache.has("849647747304390666")) {
		newMember.roles.remove("849647734872866846");
	}

	if (oldMember.roles.cache.has("849647751662534716") && !newMember.roles.cache.has("849647751662534716")) {
		newMember.roles.remove("849647734872866846");
	}

	if (newRole === null || newRole === undefined) return;
	if (newRole.id != "849647747304390666" && newRole.id != "849647751662534716") return;

	newMember.roles.add("849647734872866846");
});

client.on('message', message => {
	
	if (message.author.bot) return;
	
	if (message.content === ".work") {
		if (message.author.id === "178195931706032128" || message.author.id === "680598210892529682") {
			const workEmbed = new Discord.MessageEmbed()
				.setAuthor("time to work!")
				.setDescription(`20 mins have passed since you last worked`)
				.addField("last work message", `[click here!](${message.url})`)
			setTimeout(() => {
				message.author.send(workEmbed)
			}, 20 * 60 * 1000);
		} else {
			return;
		}
	};
	
	if (!message.content.startsWith(prefix)) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		const errorEmbed = new Discord.MessageEmbed()
			.setDescription('There was an error trying to execute that command!')
			.setColor('#202225')
		message.channel.send(errorEmbed);
	}
});

client.login(config.token);
