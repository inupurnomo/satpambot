const i18n = require("i18n");
module.exports = {
	name: 'purge',
    aliases: ["prg"],
	description: i18n.__('purge.description'),
	async execute(message) {
        if(message.member.roles.cache.find(r => r.name === 'Administrator' || r.name === 'ADMIN' || r.name === 'Admin' || r.name === 'VIP' || r.name === 'Owner')){
        
            const args = message.content.split(' ');
            let deleteCount = 0;
            try {
                deleteCount = parseInt(args[1], 10);
            }catch(err) {
                return message.reply(i18n.__('purge.range'))
            }
            

            if (!deleteCount || deleteCount < 2 || deleteCount > 100)
                return message.reply(i18n.__('purge.req'));

            const fetched = await message.channel.messages.fetch({
                limit: deleteCount,
            });
            message.channel.bulkDelete(fetched)
                .catch(error => message.reply(i18n.__('purge.reqperm', {error: error})));
    }else{
        message.channel.send(i18n.__('purge.reqperm'));
      }
	},
};