module.exports.run = async (client, message, cont) => {
 var links = [
    "https://discord.gg/sGEQq5E (ElectryHost)",
    "https://discord.gg/VHYFuUD (Discord Bot Development)",
    "https://discord.gg/4GCPzen (Electry Development)",
    "https://discord.gg/9TgNWAD (BuildersUnited)"
];
  const Discord = require('discord.js')
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
