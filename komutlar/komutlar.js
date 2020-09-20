const Discord = require('discord.js')

exports.run = async (client, message, keremdesu) => {
let kategori = keremdesu[0]
if(!kategori) return message.channel.send('Lütfen bir kategori giriniz. \`(eğlence, kullanıcı, moderasyon, bot, sunucu, kayıt, otorol, ototag, sayaç)\`');
if(kategori === 'eğlence' | kategori === 'kullanıcı' | kategori === 'moderasyon' | kategori === 'bot' | kategori === 'sunucu' | kategori === 'kayıt' | kategori === 'otorol' | kategori === 'ototag' | kategori === 'sayaç'){
let embed = new Discord.RichEmbed()
   .setTitle(`**${kategori}** Kategorsindeki Komutlar`)
   .setDescription(client.commands.filter(c=>c.conf.kategori=== kategori).map(kmt=>kmt.help.name).join(', '))
  message.channel.send(embed)
  } else { message.channel.send('Kategori \`eğlence, kullanıcı, moderasyon, bot, sunucu, kayıt, otorol, ototag, sayaç\` olmalı!') }};
  
  exports.conf = {
      enabled:true,
      guildOnly: true,
      aliases:['botkomutları'],
      kategori:"bot",
      permLevel: 0
  }
  
  exports.help = {
      name:`komutlar`,
    description:`Bottaki komutları gösterir.`,
    usage:`komutlar`
  }