const Discord = require('discord.js');
const Client = new Discord.Client()
const client = new Discord.Client()
const ayarlar = require('./ayarlar.json')
client.on('ready', () => {
  console.log('[------------] Burak35 [-------------]');
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log(`${client.guilds.size} sunucuya hizmet veriyor`);
  console.log("Bot ID'si: " + client.user.id);
  console.log("Bot Isim: " + client.user.username);
  console.log('Bu bot Oyun Gezgin için Burak35 tarafından yapılmıştır & paylaşılmıştır.');
  console.log('[------------] Burak35 [-------------]');
  console.log('Bot hazır ve giriş yaptı.');
  
client.user.setActivity(`Emoji Ekleyici Bot | Developed By Burak35`, { type: "" });
});

client.on('message', message => {
if(message.content.startsWith(ayarlar.prefix)) {
const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.content.toLowerCase().startsWith(ayarlar.prefix + `emoji-ekle`)){
if(message.author.id ===! ayarlar.sahip) { return message.channel.send("Bu komutu sadece sahibim kullanabilir!") }
if(!args[0]) { return message.channel.send("İsim argümanı eksik!") }
if(!args[1]) { return message.channel.send("Link argümanı eksik!") }
message.guild.emojis.create(args[1], args[0])
  .then(emoji => message.channel.send(`${emoji.name} isimli emoji oluşturuldu!`))
  .catch(err => {
  message.channel.send("Bir hata oluştu.\nHata: "+err)
  .catch(msgerr => {
  message.channel.send("Bir hata oluştu.\nHatayı yazdırırken hata oluştuğu için hatayı yazdırmadım ancak konsola gönderildi daha sonra tekrar deneyin!")    
  })
  console.error;
});
}  
}
});

client.login(ayarlar.token)