const i18n = require("i18n");
const { LOCALE } = require("../util/EvobotUtil");
i18n.setLocale(LOCALE);
const fs = require('fs')

module.exports = {
	name: 'kick',
	description: i18n.__('kick.description'),
	execute(message) {
    let taggedUser = message.guild.member(message.mentions.users.first())
    
		if (!taggedUser) {
      return message.reply(i18n.__('kick.req'));
    }else{
      if(message.member.roles.cache.find(r => r.name === 'Administrator' || r.name === 'ADMIN' || r.name === 'Admin' || r.name === 'VIP' || r.name === 'Owner')){
        //Check if your bot can`t kick this user, so that show this error msg 
        if(!taggedUser.kickable) {
            message.channel.send(i18n.__('kick.cant'));
            return
        };

        // If all steps are completed successfully try kick this user
        taggedUser.kick()
            .then(() => console.log(`Kicked ${taggedUser.displayName}`))
            .catch(console.error);
        
        taggedUser.send(`${taggedUser}, Anda di kick dari ${message.guild.name} cuk sama ${message.author.username}`)
        message.channel.send(`Kicked ${taggedUser}`);
      } else{
        message.channel.send(i18n.__('kick.needperm'));
      }
    }
	},
};