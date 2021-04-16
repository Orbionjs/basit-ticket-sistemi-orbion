const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

module.exports.run = async (client, message, args, prefix) => {

 let özelroomüye = message.mentions.members.first()
 let ticketroomwiolos = db.fetch(`özelroom_${message.guild.id}`)
if(message.channel.id !== ticketroomwiolos) return message.reply("kullandığın komut bu kanalda gerçekleştirilemiyor..") 
else {
  if(!özelroomüye) return message.reply(`özel oda kurmak için birisini etiketlemelisin.!`)

        message.guild.channels.create(`özeloda`, {
            permissionOverwrites: [
             
                   { 
              
                     id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                   },
               {
                    id: message.mentions.members.first().id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                           },
               { 
  
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL' , 'SEND_MESSAGES'],
                
              },

            ],
            type: 'text',
    
                  }).then(async channel => {
			message.reply(`Başarıyla ${özelroomüye} ile birlikte özel oda kurdunuz..`);
			channel.send(`<@`+ message.author +`>` +"Başarıyla "+ `${özelroomüye}`+ "ile birlikte özel oda kurdunuz..\nArtık birlikte doyasıya sohbet edebilirsiniz :blush:!\n\nKapatmak İçin `s!ticket-kapat` ");
      })
           
  
}}
exports.conf = {
    enabled : false,
    guildOnly : false,
    aliases : ['özel-oda'],
    permLevel : 0
}
 
exports.help = {
    name : 'ticket',
    description : '',
    usage : 'ticket-açıyor-işte-amq'
}