const i18n = require("i18n");
module.exports = {
	name: 'halo',
	description: i18n.__('halo.description'),
	execute(message) {
		return message
		.reply(i18n.__mf('halo.result'))
	},
	
};