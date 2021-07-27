const { MessageEmbed } = require("discord.js");
const { PREFIX, LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message, args, client) {
    
    var botIcon = client.user.displayAvatarURL({ format: "png", dynamic: true });
    var botUsername = client.user.username;

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: client.user.username }))
      .setDescription(`Semua kebutuhan discord anda tersedia di bot ini`)
      .setAuthor(`${message.guild.owner.user.username}`, 'https://cdn.discordapp.com/avatars/'+`${message.guild.owner.user.id}`+'/'+`${message.guild.owner.user.avatar}`+'.gif', 'https://twitter.com/inupurnomo')
      .setThumbnail('https://cdn.discordapp.com/avatars/'+`${message.guild.owner.user.id}`+'/'+`${message.guild.owner.user.avatar}`+'.gif')
      .setColor("#F8AA2A")
      
      .addFields(
        { name: 'Fungsi BOT ini', value: 'Fungsinya buat mantau Server, kalo ada yang cemacem nanti di ban, kick. \nBisa juga play music bro jangan khawatir'},
        { name: 'Prefix', value: `\`${PREFIX}\``},
        { name: 'Play a song', value: `To get started, join a voice channel and \`${PREFIX}play\` a song. You can use song names, video links, and playlist links.`},
        { name : `${i18n.__("help.embedDescription")}`, value: 'A full list of commands is available [here](https://example.com/).'},
        { name: 'Add to Discord', value: `**${botUsername}** can be added to as many servers as you want! [Click here to add it to yours.](https://discordapp.com/oauth2/authorize?client_id=710698235697692683&scope=bot 'Click here to add it to yours.')`},
      )
      .setImage(`${botIcon}`)
      .setFooter(`To get more info on a command, do \`${PREFIX}help\` command name`);
    // commands.forEach((cmd) => {
    //   helpEmbed.addField(
    //     `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
    //     `${cmd.description}`,
    //     true
    //   );
    // });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
