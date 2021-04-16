const db = require('quick.db');
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
  
let tickets = db.fetch(`özelroom_${message.guild.id}`)
if(!tickets) return message.reply("Ticket sistemi daha önceden ayarlanmamış.?!\nAyarlamak için örnek: `b!ticket-oda #kanal <saniye>`")
db.delete(`özelroom_${message.guild.id}`)
const tagayarlandı = new Discord.MessageEmbed()
.setColor("0x2f3136")
.setTimestamp()
.setDescription(`Ticket sistemi başarıyla sıfırlandı.\n\Sıfırlayan yetkili: <@${message.author.id}>`)
message.channel.send(tagayarlandı)

}
exports.conf = {enabled : false,guildOnly : true,aliases : [],permLevel : 4
}
exports.help = {
name : 'ticket-sıfırla'
}

