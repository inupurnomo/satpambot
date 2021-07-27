const i18n = require("i18n");
const { LOCALE } = require("../util/EvobotUtil");
i18n.setLocale(LOCALE);
const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: i18n.__('ban.description'),
	execute(message, args, client) {
		const split = message.content.split(/ +/);
		const argst = split.slice(1);
		const member = getUserFromMention(argst[0], client);
		let banUser = member.username;

		if (!member) {
			return message.reply(i18n.__('ban.req'));
		}

		if (!message.member.hasPermission("MANAGE\_MEMBERS")) {
			return message.reply(i18n.__('ban.cant'));
		}

		return message.guild.members.ban(member)
		.then(() => message.reply(`${member.username} was banned.`))
		.catch(error => message.reply(i18n.__('ban.error')));
	},
};