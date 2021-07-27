const i18n = require("i18n");

module.exports = {
	name: 'leave',
  aliases: ["dc"],
	description: i18n.__('leave.description'),
	execute(message) {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel){
      message.member.voice.channel.leave();
      return message.channel.send(i18n.__('leave.result'));
    } else{
      return message.channel.send(i18n.__('leave.error'));
    }
	},
};
