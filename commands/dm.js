const i18n = require("i18n");
module.exports = {
	name: 'dm',
	description: i18n.__('dm.description'),
	execute(message) {
    const split = message.content.split(/ +/);
    const args = split.slice(1);
    
    let dUser = message.guild.member(message.mentions.users.first());
    if (!dUser) return message.channel.send(i18n.__mf('dm.notfound'))

    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply(i18n.__mf('dm.empty'))

    let dAuthor = message.author.username;
    let dServer = message.guild.name;

    dUser.send(i18n.__mf('dm.msg', {dUser:dUser, dAuthor:dAuthor, dServer:dServer, dMessage:dMessage}))

    return message
      .reply(i18n.__mf('dm.result', {dUser}))
      .catch(console.error);
	}
};