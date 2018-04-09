module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const eco = require("discord-eco");
  const talkedRecently = new Set();
  if (talkedRecently.has(message.author.id))
    return message.channel.send("You've already been payed.");

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.remove(message.author.id);
  }, 86400000);
  eco.updateBalance(message.author.id, '50').then((i) => {
    message.channel.send("You've received €50!")
});
}
module.exports.config = {
  command: "payday"
}
