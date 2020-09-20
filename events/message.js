const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
module.exports = async message => {
 /* if(message.channel.type === 'dm'){
    let prefix = ayarlar.prefix;
  }*/
  if(message.channel.type === 'dm') return
let prefix = await db.fetch(`prefix.${message.guild.id}`)
if (prefix == null) prefix = ayarlar.prefix;
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if(cmd){
      let çalışmakanal = db.fetch(`çalışmakanal.${message.guild.id}`)
if(cmd.help.name != 'çalışma-kanal' && çalışmakanal && çalışmakanal.includes(message.channel.id)) return;
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms)
  }
  
      }
