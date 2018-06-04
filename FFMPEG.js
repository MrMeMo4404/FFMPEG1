const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log(`✨ Name: ${client.user.username}`)
  console.log(`✨ Id: ${client.user.id}`)
  console.log(`✨ Prefix: ${prefix}`)
  console.log(`✨ Servers: ${client.guilds.size}`)
  console.log(`✨ Members: ${client.users.size}`)
  console.log(`✨ Channels: ${client.channels.size}`)
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


var prefix = "-";

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["222993960623276033"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**انت صاحب* البوت تم اثبات ملكية البوت لكـ` + `✅`)
} else {
   message.reply('انت منتب راعي البوت ' + '❌');   
}
}
});




var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` MrMeMo Bot
 .`, 'https://cdn1.imggmi.com/uploads/2018/5/24/fdf9bb1f227aa2a68de62d508a8c25be-full.png')

  message.channel.sendEmbed(embed);
    }
});






var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "em1") {
    let say = new Discord.RichEmbed()
.setImage("https://cdn1.imggmi.com/uploads/2018/5/24/e961a2a68966ceb6d47bc873f3a25a45-full.jpg")
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});



var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "em2") {
    let say = new Discord.RichEmbed()
.setImage("https://cdn1.imggmi.com/uploads/2018/5/24/cad052f1cca424b186f12540084a7f76-full.jpg")
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "em3") {
    let say = new Discord.RichEmbed()
.setImage("https://cdn1.imggmi.com/uploads/2018/5/24/43c40503fc9b58edea54b2f42e32015d-full.jpg")
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});






var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  
  
if (command == "em4") {
    let say = new Discord.RichEmbed()
.setImage("https://cdn1.imggmi.com/uploads/2018/5/28/5a946dce66346bdb5faded224a1992d8-full.png")
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});





client.on('ready', () => {
  client.user.setGame(`✨ -help ✨`,'https://www.twitch.tv/mrmemeo44');
});





 





client.on('message', message => {
    if (message.content === "-server") {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();


        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**Server ID**", "**" + message.guild.id + "**", true)
            .addField("**Server Owner**", "**" + message.guild.owner + "**", true)
            .addField("**Server Location**", "**" + message.guild.region + "**", true)
            .addField('**Server Text Channels**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**Server Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**Date created**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles**", `**[${message.guild.roles.size}]** Role `, true)

        .addField("Members", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    }
});




client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "-ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });
  
  
  
  client.on('message', message => {
    var prefix = "-"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});




client.on('message', message => {
	    var prefix = "*"
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});









client.on('message', function(msg) {
	var prefix = "*"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



client.on('message', message => {
    
    if (message.content === "-scr") {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Dev",
       permissions :   [2146958591],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Co-Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Moderator",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Master",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Manger",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Friends",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "VIP",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "VIP +",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "YouTuber",
       permissions :   [53992641],
       color : " #000000"
   })
    message.guild.createRole({
       name : "Friends",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "SERVER|BOT",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "MUSIC|BOT",
       permissions :   [1],
       color : " #000000"
   }) 
   
 }
});



client.on('message', message => {
    if (message.content === "-scc") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

	 message.guild.createChannel('💎info💎', 'text')
	 message.guild.createChannel('💎welcome💎', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('bot🤖', 'text')
	 message.guild.createChannel('5wa6er-❖', 'text')
	 message.guild.createChannel('saraha-❖', 'text')
	 message.guild.createChannel('pic📸', 'text')
	 message.guild.createChannel('cut', 'text')
	 message.guild.createChannel('color-id🌈', 'text')
	 message.guild.createChannel('games🎮', 'text')
	 message.guild.createChannel('music🎧', 'text')
	 message.guild.createChannel('🤖log🤖', 'text')
	 message.guild.createChannel('🕵🏻admin-chat🕵🏻', 'text')
	 message.guild.createChannel('🗣report🗣', 'text')
	 message.guild.createChannel('🗣dm🗣', 'text')               //هاي القناة خاصه في بوتك تجي عليها الرسائل الي تجي البوتك بالخاص
     message.guild.createChannel('▓▬▬▬ADMNS▬▬▬▓', 'voice')
	 message.guild.createChannel('Owner - مالك السيرفر', 'voice')
	 message.guild.createChannel('Co Owner - نائب الرئيس', 'voice') 
	 message.guild.createChannel('Dev - مبرمج السيرفر', 'voice')
	 message.guild.createChannel('Admin - مشرف', 'voice')
	 message.guild.createChannel('Mod - مود', 'voice')
	 message.guild.createChannel('▓▬▬▬Other▬▬▬▓', 'voice')
	 message.guild.createChannel('[ R E C ] 🎥', 'voice')
	 message.guild.createChannel('YouTubers - يوتيوبرز', 'voice')
	 message.guild.createChannel('VIP + - كبار الشخصيات بلس', 'voice')
	 message.guild.createChannel('VIP - كبار الشخصيات', 'voice')
	 message.guild.createChannel('Friends - اصدقاء', 'voice')
	 message.guild.createChannel('▓▬▬▬WEL▬▬▬▓', 'voice')
	 message.guild.createChannel('Help - مساعدة', 'voice')
	 message.guild.createChannel('Ξ〖 اقـتـراحـاتـكمـ 💡 〗', 'voice')
	 message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice')
	 message.guild.createChannel('♧ Ξ〖 🎤  سواليف 📣  〗', 'voice')
	 message.guild.createChannel('♢ Ξ〖 🎤 مواهب 🎵  〗', 'voice')
	 message.guild.createChannel('❋ Ξ〖 🎈فعاليات 🏅 〗', 'voice')
	 message.guild.createChannel('❋ Ξ〖  🕋 القرآن الكريم  〗', 'voice')
	 message.guild.createChannel('▓▬▬▬♛▬▬▬▓', 'voice')
	 message.guild.createChannel('☆  Ξ〖 🔞  السجن العام 🔪 〗', 'voice')
	 message.guild.createChannel('▓▬▬▬Games▬▬▬▓', 'voice')
	 message.guild.createChannel('Clash of Clans | كلاش أوف كلانز', 'voice')
	 message.guild.createChannel('Clash Royal | كلاش رويال', 'voice')
	 message.guild.createChannel('Bullet force | بولت فورس', 'voice')
	 message.guild.createChannel('PUBG TiMi | بتلكراوند', 'voice')
	 message.guild.createChannel('PUBG LightSpeed | بتلكراوند', 'voice')
	 message.guild.createChannel('▓▬▬▬Music▬▬▬▓', 'voice')
	 message.guild.createChannel('Tow🎹', 'voice')
	 message.guild.createChannel('Three🎷', 'voice')
	 message.guild.createChannel('Four🎺', 'voice')
	 message.guild.createChannel('Five🎸', 'voice')
	 message.guild.createChannel('Six🎻', 'voice')
	 message.guild.createChannel('▓▬▬▬Private▬▬▬▓', 'voice')
	 message.guild.createChannel('Tow🔐', 'voice')
	 message.guild.createChannel('Three🔐', 'voice')
	 message.guild.createChannel('Four🔐', 'voice')
	 message.guild.createChannel('Five🔐', 'voice')
	 message.guild.createChannel('Six🔐', 'voice')
	 message.guild.createChannel('▓▬▬▬AFK▬▬▬▓', 'voice')
	 message.guild.createChannel('Sleep💤', 'voice')
	 message.guild.createChannel('▓▬▬▬✨▬▬▬▓', 'voice')
	 message.guild.createChannel('🕐 - Time   「」', 'voice')
	 message.guild.createChannel('📅 - Date 「」', 'voice')
	 message.guild.createChannel('▓▬▬▬ADMNS▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬Other▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬WEL▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬♛▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬Games▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬Music▬▬▬▓', 'category')
     message.guild.createChannel('▓▬▬▬Private▬▬▬▓', 'category')
	 message.guild.createChannel('▓▬▬▬AFK▬▬▬▓', 'category')
     message.guild.createChannel('▓▬▬▬✨▬▬▬▓', 'category')

message.channel.sendMessage('**---------------**')
message.channel.sendMessage('**Text & Channel Was Succsesfluy Created**')
message.channel.sendMessage('**---------------**')
message.channel.sendMessage('**By MrMeMo**')
}
});







const zalgo = require('zalgolize');
 client.on('message', message => {
  if (message.author.bot) return;
  var prefix = "-"
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "tag") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')
   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});




client.on('message', message => {
    if (message.content === '-roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});



client.on('message', message =>{
    if(message.content == "*roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});



  

  
  
client.on('message', message => {
var prefix = ('-');
 if (message.content === (prefix) + "icon") {
    var ms = 5000;
    var Icon = [`http://joendzulo.com/wp-content/uploads/2009/02/initial-D-letter-1920x1080.jpg`,`http://www.thaqafnafsak.com/wp-content/uploads/2014/07/The-letter-A-the-alphabet-22186936-2560-2560.jpg`,`https://i.ytimg.com/vi/mV8KxYcUat0/hqdefault.jpg`,`http://pithytees.com/wp-content/uploads/2017/03/mmj-dab-bad-weed-wear-that-design.jpg`,`https://cdn1.imggmi.com/uploads/2018/5/24/43c40503fc9b58edea54b2f42e32015d-full.jpg`,`https://cdn1.imggmi.com/uploads/2018/5/24/e961a2a68966ceb6d47bc873f3a25a45-full.jpg`];
    var i = -1;
    var j = 0;
   setInterval(function (){
       if( i == -1 ){
            j = 1;
        }
        if( i == (Icon.length)-1 ){
            j = -1;
        }
       i = i+j;
        message.guild.setIcon(Icon[i]);
    }, ms);5000
    }
});  
  
  
  
  
client.on('message', message => {
    if (message.content.startsWith("-webhooks")) {
message.guild.fetchWebhooks()
  .then(webhooks => message.channel.send(`  ويب هوك${webhooks.size} تم ايجاد`))
  .catch(console.error);
}
});

  


const figlet = require('figlet');
client.on('message', message => {
	var prefix ="-";
if (message.content.startsWith(prefix + 'ttag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});  



const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

    client.on('message', message => {
		var prefix ="-";
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});





client.on('message', message => {
    if (message.content.startsWith("-stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}905





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝
---------------------
نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:
---------------------
https://discord.gg/X9mj6eX
---------------------
-الدعووة خاصة لك ي قلبي ... [${message.guild.name}
---------------------
-:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا
---------------------
-اتمنا لك وقتا ممتعا
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});




client.on('message' , message => {
var prefix = "-"//البرفكس حك البوت

if (message.author.bot) return;
if (message.content.startsWith(prefix + "twasl")) {
	if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("222993960623276033").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📧📤 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : MrMeMo")
                                                

message.channel.send(embed);


}
    
});



client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
	var prefix = "-"
if (message.content.startsWith(prefix + 'help')) {
  var embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
	  .setFooter('By ♪ MrMeMo')
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
✨💎『Common Commands |  الاوامر العامه』💎✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎-tag 『زخرفه』✨
💎*uptime 『وقت البوت』✨
💎-date 『التاريخ』✨
💎-ser-av 『صوره السيرفر』 ✨
💎-server 『معلومات السيرفر』 ✨
💎-em 1,2,3 『صور رمضانيه』 ✨
💎-ping 『قياس البنك』 ✨
💎-embed 『رساله في صوره』 ✨
💎-ttag 『كتابه في مربع』 ✨
💎-perms 『البرمشنات مالتك』 ✨
💎-gif 『صور متحركه تلقائيه』 ✨
💎-stats 『معلومات』 ✨
💎-alarm 『لاعداد منبه』 ✨
💎-دعوات ✨            
💎-bot 『حالة البوت』 ✨
💎-translate 『ترجمه اي كلمه الى اي لغه』 ✨
💎-twasl 『تواصل مع صاحب البوت』 ✨
💎-report 『اذا عندك اي شكوى على البوت』 ✨
💎-الوان ✨
💎-رابط ✨
💎-inv 『لدعوة البوت الى سيرفرك』 ✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
✨🎮『Games Commands  | اوامر الالعاب』🎮✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎮-اسئلني ✨
🎮-صراحه ✨
🎮-قرعه ✨
🎮-عقاب ✨
🎮-لو خيروك ✨
🎮-كت تويت ✨
🎮-خواطر ✨
🎮-حب ✨
🎮-حكم ✨
🎮-رياضيات ✨
🎮-سرعة ✨
🎮-منشن ✨
🎮-فكك ✨
🎮-اذكار ✨
🎮-عواصم ✨
🎮-لاعب ✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
✨🎵『Music Commands  | اوامر الميوزك』🎵✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
🎵-play 『تشغيل البوت』 ✨
🎵-stop 『ايقاف البوت』 ✨
🎵-pause 『ايقاف مؤقت』 ✨
🎵-resume 『الغاء الايقاف المؤقت』 ✨
🎵-skip 『التخطي للاغنيه الثانيه』 ✨
🎵-vol 『0-100』 『لتعديل صوت البوت』 ✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
`)
  message.author.sendEmbed(embed)

}
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
   var embed = new Discord.RichEmbed()
        .setTitle('تم ارسال جميع الاوامر على الخاص ,, 📧📤 ✨')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed)
    }
});



client.on('message', message => {

if (message.content.startsWith('-inv')) {
  var embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
https://discordapp.com/api/oauth2/authorize?client_id=450706232295292928&scope=bot&permissions=1
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
  message.author.sendEmbed(embed)

}
});

client.on('message', message => {
if (message.content.startsWith('-inv')) {
   var embed = new Discord.RichEmbed()
        .setTitle('تم ارسال الرابط بالخاص,, 📧📤 ✨')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed)
    }
});



client.on('message', message => {
    if (message.content === "-inv") {
      if(!message.channel.guild) return message.reply('Sorry, i Can Not Inv My Link In Your DM ;(')
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)
    .setTitle(`:small_orange_diamond:اضغط هنا :blush: `)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=450706232295292928&scope=bot&permissions=1`)
    .setThumbnail("https://cdn1.imggmi.com/uploads/2018/5/31/6678ea3aef11ffc451391d748ec5d021-full.jpg")
    .addField('🔹By', "<@" + message.author.id + ">")
 message.channel.sendEmbed(embed);
   }
});





 client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "-";
    if(message.content.startsWith(prefix + 'bc')) {
	if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "💪¤DôNâ†êLô¤😎";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
	
	
	
client.on('message' , message => {
var prefix = "-"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "report")) {
    message.delete();
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
let reason = message.content.split(" ").slice(1).join(" ");
if(!reason) return message.reply ("**اكتب شكوتك بوضوح**").then(msg => msg.delete(5000));
let reports = new Discord.RichEmbed()
.addField('**المرسل:**', message.author.tag)
.addField('**الشكوى:**', args)
client.channels.get("450095526159974411").send(reports)

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📧📤 تم ارسال الشكوى للادارة بنجاح') 
     .setThumbnail(message.author.avatarURL)
     .setFooter("Reports")
                                                

message.channel.send(embed).then(msg => msg.delete(5000));


}
    
});




client.on('message', msg => {
	var prefix = "-"
if (msg.content.startsWith(prefix + 'help-ad')) {
  var embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑✨『Administrationr Commands | اوامر الاداره』👑✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑-scc 『انشاء قنوات جاهزه』 ✨
👑-scr 『انشاء رولات جاهزه』 ✨
👑*roles 『معرفة رولات السيرفر بالكامل』 ✨
👑-roles 『شكل اخر لمعرفه رولات السيرفر』 ✨
👑-avatar 『لتظهر صورة حسابك او صورة الي تمنشنه』 ✨
👑-cr-colors 『لانشاء 140 لون مرتب』 ✨
👑$del-colors 『لحذف جميع الالوان』 ✨
👑-role <all-humans-bots> <Role Name> 『لاعطاء الكل او البوتات او الاعضاء رتبه[』 ✨
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
`)
  msg.author.sendEmbed(embed)

}
});

client.on('message', msg => {
if (msg.content.startsWith(prefix + 'help-ad')) {
   var embed = new Discord.RichEmbed()
        .setTitle('تم ارسال جميع الاوامر على الخاص ,, 📧📤 ✨')
        .setColor('RANDOM')
       msg.channel.sendEmbed(embed)
    }
});





let id;
let guild;
let emojiHasPermission;

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', message => {
  id = client.user.id;
  guild = message.guild;
  emojiHasPermission = permission => {
    console.log(permission);
    if (guild.member(id).permissions.has(permission, false)) {
      return ':white_check_mark:';
    } else {
      return ':x:';
    }
  };
  if (message.content === '-perms') {
  message.channel.send({embed: {
    title: ':tools: Permissions',
    color: 0x06DF00,
    fields: [
      {

        name: 'Administrator :',
        value: emojiHasPermission('ADMINISTRATOR'),
        inline: true
      },
      {
        name: 'Create Instant Invite :',
        value: emojiHasPermission('CREATE_INSTANT_INVITE'),
        inline: true
      },
      {
        name: 'Kick Members :',
        value: emojiHasPermission('KICK_MEMBERS'),
        inline: true
      },
      {
        name: 'Ban Members :',
        value: emojiHasPermission('BAN_MEMBERS'),
        inline: true
      },
      {
        name: 'Manage Channels :',
        value: emojiHasPermission('MANAGE_CHANNELS'),
        inline: true
      },
      {
        name: 'Manage Guild :',
        value: emojiHasPermission('MANAGE_GUILD'),
        inline: true
      },
      {
        name: 'Add Reactions :',
        value: emojiHasPermission('ADD_REACTIONS'),
        inline: true
      },
      {
        name: 'View Audit Log :',
        value: emojiHasPermission('VIEW_AUDIT_LOG'),
        inline: true
      },
      {

        name: 'Manage Messages :',
        value: emojiHasPermission('MANAGE_MESSAGES'),
        inline: true
      },
      {
        name: 'Embed Links :',
        value: emojiHasPermission('EMBED_LINKS'),
        inline: true
      },
      {
        name: 'Attach Files :',
        value: emojiHasPermission('ATTACH_FILES'),
        inline: true
      },
      {
        name: 'Read Message History :',
        value: emojiHasPermission('READ_MESSAGE_HISTORY'),
        inline: true
      },
      {
        name: 'Mention Everyone :',
        value: emojiHasPermission('MENTION_EVERYONE'),
        inline: true
      },
      {
        name: 'Use External Emojis :',
        value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
        inline: true
      },
      {
        name: 'Connect :',
        value: emojiHasPermission('CONNECT'),
        inline: true
      },
      {
        name: 'Speak :',
        value: emojiHasPermission('SPEAK'),
        inline: true
      },
      {

        name: 'Mute Members :',
        value: emojiHasPermission('MUTE_MEMBERS'),
        inline: true
      },
      {
        name: 'Deafen Members :',
        value: emojiHasPermission('DEAFEN_MEMBERS'),
        inline: true
      },
      {
        name: 'Move Members :',
        value: emojiHasPermission('MOVE_MEMBERS'),
        inline: true
      },
      {
        name: 'Use VAD :',
        value: emojiHasPermission('USE_VAD'),
        inline: true
      },
      {
        name: 'Change Nickname :',
        value: emojiHasPermission('CHANGE_NICKNAME'),
        inline: true
      },
      {
        name: 'Manage Nicknames :',
        value: emojiHasPermission('MANAGE_NICKNAMES'),
        inline: true
      },
      {
        name: 'Manage Roles :',
        value: emojiHasPermission('MANAGE_ROLES'),
        inline: true
      },
      {
        name: 'Manage Webhooks :',
        value: emojiHasPermission('MANAGE_WEBHOOKS'),
        inline: true
      },
      {
        name: 'Manage Emojis :',
        value: emojiHasPermission('MANAGE_EMOJIS'),
        inline: true
      }
    ]
  }
  });
  }
});



client.on('message', mrmemo => {
var prefix = "-";
if(mrmemo.content.split(' ')[0] == prefix + 'dec') {  // delete all channels
if (!mrmemo.channel.guild) return;
if(!mrmemo.guild.member(mrmemo.author).hasPermission("MANAGE_CHANNELS")) return mrmemo.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!mrmemo.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return mrmemo.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
mrmemo.guild.channels.forEach(m => {
m.delete();
});
}
if(mrmemo.content.split(' ')[0] == prefix + 'der') { // delete all roles
if (!mrmemo.channel.guild) return;
if(!mrmemo.guild.member(mrmemo.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return mrmemo.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!mrmemo.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return mrmemo.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
mrmemo.guild.roles.forEach(m => {
m.delete();
});
mrmemo.reply("`**تم حذف كل الرتب بنجاح**`")
}
});










var attentions = {};
var prefix = '-';
var times = {
    "1⃣": "m",
    "2⃣": "h",
    "3⃣": "d"
}
var times_ms = {
    "m": 1000 * 60,
    "h": 1000 * 60 * 60,
    "d": 1000 * 60 * 60 * 24
}
var times_name = {
    "m": "الدقائق",
    "h": "الساعات",
    "d": "الأيام"
}
console.log('By MrMeMo ( Discord.JPEI team )');
client.on('message',( message )=>{
    if( message.content.startsWith( prefix + 'alarm' ) ){
        if( attentions[ message.member ] ) {
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.react('1⃣').then( r1 => {
                    m.react('2⃣').then( r2 => {
                        setTimeout(function ( ){
                            m.edit( message.member +', ** يوجد تذكير مضاف بالفعل, هل تريد حذفه ؟ ** \n**:one: نعم** \n **:two: لا** ' );
                            m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                            .then(result => {
                                var reaction = result.firstKey();
                                if( reaction == "1⃣" || reaction == "2⃣" ){
                                    if( reaction == "1⃣" ){
                                        clearTimeout(attentions[message.member]['timer']);
                                        attentions[message.member] = undefined;
                                        m.edit(message.member + '**:white_check_mark: تم حذف التذكير, يمكنك الآن أضافة واحد**');
                                    } else if( reaction == "2⃣" ){
                                        m.edit(message.member + '** لن يتم حذف التذكير **')
                                    }
                                    m.clearReactions();
                                }
                            });
                        },1000);
                    });
                });
            });

        } else {
            attentions[message.member] = { };
            message.channel.send( message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون عنوان التذكير **' )
                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                    m1 = m1.first();
                    attentions[message.member]['title'] = m1.content;
                    m1.delete();
                    m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( (m) =>{
                        m.edit( message.member + ', **:writing_hand: ماذا تريد ان يكون وصف التذكير **' )
                        m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                            m2 = m2.first();
                            attentions[message.member]['desc'] = m2.content;
                            m2.delete()
                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then( ()=>{
                                m.react('1⃣').then( r1 => {
                                    m.react('2⃣').then( r2 => {
                                        m.react('3⃣').then( r2 => {
                                            setTimeout(function ( ){
                                                m.edit(message.member + ', **:writing_hand: حدد موعد التذكير التقريبي**\n **:one: بعد دقائق ** \n **:two: بعد ساعات ** \n **:three: بعد أيام**');
                                                m.awaitReactions((reaction, user) => user.id == message.author.id, {time: 60000, maxEmojis: 1})
                                                    .then(result => {
                                                        var reaction = result.firstKey();
                                                        if( reaction == "1⃣" || reaction == "2⃣" || reaction == "3⃣" ){
                                                            attentions[message.member]['time'] = times_ms[times[reaction]];
                                                            m.edit(message.member + ', **:timer: أنتظر قليلاً ريثما يتم أعدادك**').then ( ( ) =>{
                                                            m.clearReactions().then( () =>{
                                                                m.edit(message.member + ', **:timer: اذكر عدد '+times_name[times[reaction]]+'**' )
                                                                    m.channel.awaitMessages( m3 => m3.author == message.author && !isNaN(m3.content),{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                                                        m3 = m3.first();
                                                                        attentions[message.member]['time_num'] = m3.content;
                                                                        m3.delete();
                                                                        attentions[message.member]['timer'] = setTimeout(function( ){
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                            var embed = new Discord.RichEmbed( );
                                                                            embed.setTitle( attentions[message.member]['title'] );
                                                                            embed.setDescription( attentions[message.member]['desc'] );
                                                                            embed.setTimestamp();
                                                                            message.member.send({embed});
                                                                            message.member.send('** '+message.member+' تذكير !! **')
                                                                        }, attentions[message.member]['time_num'] * attentions[message.member]['time'] );

                                                                        message.reply('** :white_check_mark: تم أضافة التذكير, سيتم تذكيرك لاحقاً **');
                                                                        m.delete();
                                                                        message.delete();
                                                                    }).catch(function(){ m.delete( ); attentions[message.member] = undefined; } );
                                                                });
                                                            });
                                                        }
                                                    });
                                            },1000);
                                        });
                                    });
                                });
                            }).catch(function() { m.delete();attentions[message.member] = undefined;  });
                        }).catch(function() { m.delete(); attentions[message.member] = undefined;  });
                    });

                }).catch(function( ) {m.delete(); attentions[message.member] = undefined; });
            });
        }
    }
});





client.on('message', message => {
    if(message.content === "-bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#RANDOM")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});





const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith("-دعوات")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User Invited', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("دعوات السيرفر")
    .addField('المتصدرين' , `\`\`\`${table.table(possibleInvites)}\`\`\``)
    .addField('**شكرا لدعمكم المتواصل للسيرفر ♥**')
	.setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setFooter('DARK Bot', 'https://cdn1.imggmi.com/uploads/2018/5/29/3dbc2a29bf1d69b9966285da7a157b8d-full.jpg')
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed)
    }
});


client.on('message', message => {
    if (message.content.startsWith("-دعوه")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`انت جبت   ${invites.find(invite => invite.inviter.id === message.author.id).uses} عضو لهاذا السيرفر`))



     
    }
});







client.on('message', message => {
    if (message.content == "-اسئلني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});





const fs = require("fs");
let points = JSON.parse(fs.readFileSync(`./point.json`, `utf8`));
var shortNumber = require('short-number');


var prefix = '-';
//MATH

client.on('message', message => {
  if (message.author.bot) return;

if(!message.channel.guild) return;

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  };
if (message.content.startsWith(prefix + 'رياضيات')) {

const type = require('./mathh.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10  ثواني لتجيب**').then(msg => {

   const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setThumbnail(message.author.avatarURL)     
 .addField(`**DARK-BOT**`,` **${item.type}**`)
 .setFooter(`ستكسب 15 نقطة`)

msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`**${collected.first().author} مبروك لقد كسبت 15 نقطة 
لمعرفة نقاطك الرجاء كتابة (-نقاطي)**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[collected.first().author.id];
userData.wins += 1 
userData.points += 15; 

          })

          .catch(collected => {
points[message.author.id].loses += 1;

            message.channel.send(`:x: **حظ اوفر المرة القادمة ! لقد خسرت , انتهى الوقت**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
			console.log('[Typing] Error: No one type the word.');

		})
	})
    })
points[message.author.id].game += 1; 


}
fs.writeFile("./point.jsmn",JSON.stringify(points), function(err){
    if (err) console.log(err);
  })
});


//points
client.on('message', message => {

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  game: 0,

  };
  if (message.author.bot) return;


if(!message.channel.guild) return;
	let userData = points[message.author.id];

if (message.content.startsWith(prefix + 'نقاطي')) {
let pointss = userData.points
try {
                            pointss = shortNumber(pointss);
                        } catch (error) {
                            pointss = 0;
                        }
                        let wins = userData.wins
try {
                            wins = shortNumber(wins);
                        } catch (error) {
                            wins = 0;
                        }
                        let loses = userData.loses
try {
                            loses = shortNumber(loses);
                        } catch (error) {
                            loses  = 0;
                        }
                         let games = userData.game
try {
                            games = shortNumber(games);
                        } catch (error) {
                            games  = 0;
                        }
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`**DARK-BOT

:white_check_mark: عدد الفوز : ${wins}
:x: عدد الخسارة: ${loses}
:label:التقاط: ${pointss}
:video_game: عدد مرات اللعب: ${games}**` , 'https://cdn.discordapp.com/avatars/424318770996314124/bfc297fb61c7aaa5fc63f99518ea1617.png?size=2048');
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./point.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

});







const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('-صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});


const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("-عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('DARK Bot' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[DARK] Send By: ' + message.author.username)
    }
});


  var prefix = "-";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});



 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("-كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("-خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("-حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





client.on('message', function(message) {
  var prefix = '-';
    if(message.content.startsWith(prefix + 'قرعه')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


const kingmas = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
   var prefix = '-';
 if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});







const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith('-اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});









var prefix = "-";////هنا تحط البرفكس اللي تبيه
////اول شي طبعا الكود من صنعي
////ثاني شي يمنع نشره الا بدون حقوقي وحقوق كودز
////ثالث شي لاي استفسار انا موجود علي الديسكورد 
////الكود متعوب عليه الف 
////ما تجي تبيعه بأي سيرفر وتقول انا اللي مسويه ومدري ايش
////يرجي الالتزام بالشروط رجاء
////ملاحظه الكود 203 صوره وجواب وكلهم صحيحين متأكد منهم مليون مره 
////اذا صار معك اي خطأ تعال ديسكورد وابشر بس
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'لاعب')) { ////هنا الامر اللي بتكتبه ويعطيك الصوره والكلام بس الامر لازم تحط معه البرفكس اللي بتحطه فوق
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));////هنا الرساله ذي اذا احد دخل الخاص حق البوت وسوي *لاعب يقوله ما ينفع بس في السيرفرات

const type = require('./player/player.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتعرف ما اسم اللاعب **').then(msg => { ////هادي الرساله اللي يكتبها يقوله لديك 15 ثانيه تبي تعدلها  علي راحتك

msg.channel.sendFile(`${item.image}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **كفوو والله يا شنب اجابتك صحيحه**`); ////هنا يقوله اجابتك صحيحه وعلامة صح وهيك تبي تعدلها علي راحتك
        console.log(`[Typing] ${collected.first().author} typed the word.`);////هون بيكتبلك في الكونسل ايدي الشخص اللي كتب الاجابه صحيحه
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: لاجابه الصحيحه هي : __${item.answers}__**`); ////هنا يقوله تم الانتهاء من الوقت لما ما يجاوب والوقت يخلص تبي تعدلها علي راحتك
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});



	



client.on('ready', () => {
console.log(`
By MrMeMo
`);

});






const config = require('./config.json');

const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue ;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  if(config.speed < 800){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});





var prefix = "-"; // البرفكس العام لجميع الأوامر

client.on('message', message => {
if (message.content.startsWith(prefix + 'سرعة')) { // .سرعة
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/type.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("سرعة كتابة | لرؤية مجموع نقاطك اكتب $نقاطي |", 'https://c.top4top.net/p_814rjkod1.png')
	.setDescription(`**قم بكتابة : ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});




client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith("مسح")) {
                  if(!message.channel.guild) return message.reply('**:الامر للسيرفرات بس يا ذكي**');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**يلعن ام الذكاء ما عندك صلاحيات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تم مسح 100 رساله ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });




const MNS = ['منشن # شخص ودك تصارخ عليه ؟',
'منشن # شخص تقوله سامحني ؟',
'منشن # شخص تحسه حقير ؟',
'منشن # احلى أسم في نظرك من الموجودين ؟',
'منشن # شخص واضح وصريح بمعنى الكلمه ؟',
'منشن # شخص تقوله سامحني ؟',
'منشن # شخص تقوله الوداع ؟',
'منشن # شخص يعجبك ؟',
'منشن # شخص ودك تسحب عليه ؟',
'منشن # شخص لاشفته تبتسم ؟',
'منشن # شخص ودك تطعنه ؟',
'منشن # شخص يعرف اسرارك ؟',
'منشن # شخص تعرفه من زمان ؟',
'منشن # شخص واضح وصريح بمعنى الكلمه ؟',
'منشن # شخص ودك تحذف رصيده ؟',
'منشن # شخص لاشفته تبتسم ؟',
'منشن # شخص تحب تنام معه ؟',
'منشن # شخص ماتحب اسمه ؟',
'منشن # شخص ودك تصدمه ؟',
'منشن # شخص ودك تحجر له ؟',
'منشن # شخص ودك يغير خلفية بروفايله ؟',
'منشن # شخص يعتبر نصفك الثاني ؟',
'منشن # شخص ماتحبه ؟',
'منشن # شخص متخرفن معه ؟',
'منشن # شخص تقوله اكرهك ؟',
'منشن # شخص ودك ترفع لفله ؟',
'منشن # شخص تقول له احبك ؟',
'منشن # شخص تحتاجه وقت الشدة ؟',
'منشن # شخص دايم يخرب مودك ؟',
'منشن # شخص تعجبك تصرفاته ؟',
'منشن # شخص ودك تعطيه بوسة ؟',
'منشن # شخص دايم يفلم عليك ؟',
'منشن # شخص يهمك امره ؟']

client.on('message', message => {
var prefix = "-";

       if (message.content.startsWith(prefix + 'منشن')) {
       let channel = message.guild.channels.find('name', 'DARK_BOT');
                if(!message.channel.guild) return message.reply('** This command only for servers**');
                        var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
       var h = message.mentions.users.first();
          var h;
            if(h){
                var h = h;
            } else {
                var h = message.author;
               
            }
              var z = message.mentions.members.first();
          var z;
            if(z){
                var z = z;
            } else {
                var z = message.member;
            }
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setAuthor(h.username,h.avatarURL)
  .setDescription(`\`\`${MNS[Math.floor(Math.random() * MNS.length)]}\`\``)
.setFooter('Mnshn | منشن')
  message.channel.sendEmbed(embed);
    }
});







var prefix = "-";


client.on('message', message => {
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتوجد عاصمة **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | DARK Bot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**قم بكتابة عاصمة : ${item.type}**`) // ${item.type} = السؤال

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة العاصمة بالوقت المناسب**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم أحد بكتابة العاصمة بالوقت المناسب**`);
            console.log(`[Typing] Error: No one type the word.`);
          })
        })
    })
}
});



var prefix = "-";

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **كفووو والله شنب عداك العيب**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => 
 m.delete(3000));
    let userData = points[message.author.id];
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setColor('#000000')
    .setDescription(`نقاطك: \`${userData.points}\``)
    message.channel.sendEmbed(embed)
  }
});
client.on('guildCreate', guild => {
    console.log(`Added to a server by: ${guild.owner.user.username} || Server name: ${guild.name} || Users: ${guild.memberCount}`);
});









const translate = require('google-translate-api');
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];
var prefix = "-";
client.on('message', message => {
if (message.content.startsWith(prefix + 'translate')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `+translate <الكمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `+translate <الكمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();
           args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});




client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var norElden = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("450974883170484234").send({ embed: norElden });
    }
});






const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const request = require('request');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)
    client.user.setStatus("idle")
});

var prefix = "-"
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;

	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');

	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {

			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("CODES")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					

					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {

		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;

		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);


	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}






client.on('message', msg => {
  const DiscordLink = ["discord.gg", "discordapp.com/invite", "gg", "discord.gg"];
  if( DiscordLink.some(word => msg.content.includes(word)) ) {
    msg.reply(`⛔ | يمنع نشر روابط الدعوة .. انتبه لنفسك`)
    msg.delete();

}
});







 client.on('message', message => {
  var prefix = "-";

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == '450706232295292928') return;

  if (message.content.startsWith(prefix + 'setp1')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
  } else
  if (message.content.startsWith(prefix + 'sets1')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult, "http://twitch.tv/mrmemo44");
      message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
  } else

  if (message.content.startsWith(prefix + 'setn1')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
    return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
  } else

  if (message.content.startsWith(prefix + 'setl1')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setActivity(argresult, {type:'listening'});
      message.channel.sendMessage(`**${argresult} : تم تغير اللستينق الى**`)
  } else

  if (message.content.startsWith(prefix + 'setw1')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
      client.user.setActivity(argresult, {type : 'watching'});
   message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
  }

   });
   
   
   
   

 client.on('message', message => {
  var prefix = "-";

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == '450795292468445184') return;

  if (message.content.startsWith(prefix + 'setp2')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
  } else
  if (message.content.startsWith(prefix + 'sets2')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setGame(argresult, "http://twitch.tv/mrmemo44");
      message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
  } else

  if (message.content.startsWith(prefix + 'setn2')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
    return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
  } else

  if (message.content.startsWith(prefix + 'setl2')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setActivity(argresult, {type:'listening'});
      message.channel.sendMessage(`**${argresult} : تم تغير اللستينق الى**`)
  } else

  if (message.content.startsWith(prefix + 'setw2')) {
  if (message.author.id !== '222993960623276033') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
      client.user.setActivity(argresult, {type : 'watching'});
   message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
  }

   });







client.on("message", message =>{
//if(message.author.id !== "348082708670578688") return;
 var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

   if(command == "removeRoles"){
       var user= message.mentions.users.first();
       if(!user){
           user = message.author;
       }
    message.guild.member(user).removeRoles(message.guild.member(user).roles)
//      .then(console.log)
      .catch(console.error);
   message.channel.send(".. Removed");
   }
});





const profanities = require ('profanities')
client.on("message", message => {
    var sender = message.author;
    let msg = message.content.toLowerCase();


    for (x =0; x < profanities.length; x++) {
        if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
            message.reply("ممنوع سب 😠 ").then(m => m.delete(1500));
            message.delete();
            return;
        }
    }
});




var prefix = '-'; 

client.on('ready', () => {console.log('ready')});
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});




client.on('message', ra3d => {
            var prefix = "-";
  if (ra3d.content ===  prefix + 'cr-colors'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
    });
	
	
	
	
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '51');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '53');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '54');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '56');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '57');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '58');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '59');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '60');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '61');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '62');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '63');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '64');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '65');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '66');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '67');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '68');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '69');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '70');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '71');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '72');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '73');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '74');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '75');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '76');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '77');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '78');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '79');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '80');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '81');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '82');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '83');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '84');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '85');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '86');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '87');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '88');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '89');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '90');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '91');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '92');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '93');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '94');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '95');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '96');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '97');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '98');
		
		role.delete()
		}
		
	});
	
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '99');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '100');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '101');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '102');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '103');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '104');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '105');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '106');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '107');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '108');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '109');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '110');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '111');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '112');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '113');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '114');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '115');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '116');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '117');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '118');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '119');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '120');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '121');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '122');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '123');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '124');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '125');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '126');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '127');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '128');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '129');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '130');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '131');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '132');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '133');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '134');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '135');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '136');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '137');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '138');
		
		role.delete()
		}
		
	});

	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '139');
		
		role.delete()
		}
		
	});
	
	client.on('message',message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("$del-colors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '140');
		
		role.delete()
		
			message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('RANDOM').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري حذف على الالوان |✅``')});
	}
	});
	
	
	
var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "الوان") {
    let say = new Discord.RichEmbed()
.setImage("https://cdn.pg.sa/pZKEW2wCTl.png")
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});	



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
 if(!message.author.id === '411911292643704854') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});

	



   


client.login('process.evn.BOT_TOKEN')
