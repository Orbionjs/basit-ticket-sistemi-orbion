const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let oda = message.mentions.channels.first()
if(!oda) return message.reply("Kanal belirtmen gerek.!\nÖrnek: `b!ticket-oda #kanal <saniye>`")
let slowmode = args[1]
if(!slowmode) return message.reply("Saniye belirtmen gerek.!\nÖrnek: `b!ticket-oda #kanal <saniye>`\nNot: 60san = 1 dakika")
let ticketroomwiolos = db.set(`özelroom_${message.guild.id}`, oda.id)

      const başarılı = new discord.MessageEmbed()
.setDescription(`Ticket odası başarıyla ${oda} olarak ayarlandı.!\nTicket odasına **${args[1]}**  saniyelik slowmode ayarlandı.!`)
.setTimestamp()
.setColor("0x2f3136")


message.channel.send(başarılı)
oda.setRateLimitPerUser(args[1]);
      
}
exports.conf = {
  enabled: false,
  guildonly: true,
  aliases: ['ticketkanal', 'tkanal', 'tk',"özel-oda-ayarla","ticket-oda"],
  permlevel: 0
}
exports.help = {
  name: 'ticket-oda'
}