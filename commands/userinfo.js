const Discord = require('discord.js');
const { getUserFromMention } = require('../util/getUser')
const i18n = require("i18n");

module.exports = {
	name: 'userinfo',
    aliases: ["ui"],
	description: i18n.__('userinfo.description'),
	execute(message) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
    .setColor('#27ae60')
    .addFields(
      { name: 'Name', value: user.username },
      { name: 'ID', value: user.id },
      { name: 'Avatar', value: user.displayAvatarURL({ format: "png", dynamic: true })},
    )
    .setImage(user.displayAvatarURL({ format: "png", dynamic: true }));
    message.channel.send(avatarEmbed);
	}
};