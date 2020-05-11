module.exports = {
	name: 'report',
	description: 'report a user',
	execute(message, args) {
        if (message.content.startsWith("=report")) {
            let User=message.mentions.users.first()||null
            var prefix = '-'
            if(User==null){
                return message.channel.send(`You did not mention a user!`)
            }else{
                let Reason = message.content.slice(prefix.length+22+7)||null
                if(Reason==null){
                    return message.channel.send(`You did not specify a reason for the report!`)
                }
                let Avatar = User.displayAvatarURL()
                let Channel = message.guild.channels.cache.find(ch=>ch.name==="reports")
                if(!Channel)return message.channel.send(`There is no channel in this guild which is called \`reports\``)
                let Embed = new Discord.MessageEmbed()
                .setTitle(`New report!`)
                .setDescription(`The moderator \`${message.author.tag}\` has reported the user \`${User.tag}\`! `)
                .setColor(`RED`)
                .setThumbnail(Avatar)
                .addFields(
                    {name:"Mod ID",value:`${message.author.id}`,inline:true},
                    {name:"Mod Tag",value:`${message.author.tag}`,inline:true},
                    {name:"Reported ID",value:`${User.id}`,inline:true},
                    {name:"Reported Tag",value:`${User.tag}`,inline:true},
                    {name:"Reason",value:`\`${Reason.slice(1)}\``,inline:true},
                    {name:"Date (M/D/Y)",value:`${new Intl.DateTimeFormat("en-US").format(Date.now())}`,inline:true},
                )
                message.channel.send(Embed)
              }
            }
	},
};