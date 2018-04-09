module.exports.run = async (client, message, cont) => {
  const sconfig = require("../config.json");
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let alertTekst = cont.join(" ");
  message.delete(1);
  const member = message.member;
  const PromotieEmbed = new Discord.RichEmbed()
  .setTitle(`Promotie`)
  .addField('Gebruiker:', `<@${message.author.id}>`)
  .addField('Doorgever:', `<@427857462947872779>`)
  .addField('Server:', links[Math.floor(Math.random() * links.length)])
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter('Also promotion? Buy it on https://www.paypal.me/SmikkelHost')
  .setTimestamp()
  .setColor('0x4628d0')
  console.log('PROMO: ELECTRYHOST!')
  message.channel.send(PromotieEmbed)
}

module.exports.config = {
  command: "promotie"
}
