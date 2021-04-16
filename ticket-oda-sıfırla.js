const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

module.exports.run = async (client, message, args, member) => {

let oda = message.channel;

let word = ["özeloda"]
if (!word.some(word => oda.name.includes(word)) ) { 
 return message.reply(":no_entry: `401:` Erişim reddedildi.!")
} else {

 setTimeout(() => {
   message.channel.send(`Ticket odası başarıyla kapatıldı.!`)
                  }, 500)

 setTimeout(() => {
   message.channel.delete() 
                  }, 1000)


}
}
exports.conf = {
    enabled : false,
    guildOnly : false,
    aliases : [''],
    permLevel : 0
}
 
exports.help = {
    name : 'ticket-kapat',
    description : '',
    usage : 'ticket-açıyor-işte-amq'
}
