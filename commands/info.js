const Discord = require('discord.js');
const { PREFIX, UNM } = require("../util/EvobotUtil");
const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'info',
	aliases: ["i"],
	description: 'Get the server information',
	execute(message) {
    const infoEmbed = new Discord.MessageEmbed()
    
    .setColor('#27ae60')
    //.setTitle()
    .setURL('https://inupurnomo.com')
    .setTitle(`SERVER INFO`)
    .setDescription('Ini Bot buat mantau Server')
    .addFields(
      { name: 'Server Name', value: `${message.guild.name}`},
    )
    .addField("**Owner**", `The Owner of This Server is ${message.guild.owner}`)
    .addField("**Member Count**", "This Server Has ` " + `${message.guild.memberCount}` + " ` **Members**")
    .addField("**Emoji Count**", "This Server Has ` " + `${message.guild.emojis.cache.size}` + " ` **Emojis**")
                .addField("**Roles Count**", "This Server Has ` " + `${message.guild.roles.cache.size}` + " ` **Roles**")
                .addField("**Channels Count**", "This Server Has ` " + `${message.guild.channels.cache.size}` + " ` **Channels**")
    .addField("**Date Created**", `Server Created on **${message.guild.createdAt.toLocaleString()}**`)
    .setFooter('Love peace and gawl')
    .setImage(`${message.guild.iconURL()}`)
    .setTimestamp()
    
    message.channel.send(infoEmbed);
  }
};