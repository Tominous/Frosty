const Discord = require('discord.js')

module.exports = {
	name: '2',
	description: 'get a 2x2 scramble',
	execute(message, args) {
        let amount = args.slice(0).join(' ');
    if(!amount) amount = 1;
    if(amount>5) amount = 5;
    if(amount==0) message.channel.send('Amount of scrambles shown: your IQ :smirk:');
 
 
for(var i = 0;i<amount;i++){
        var num;
    var package;
    var previous;
    var count = 0;
    var previous2;
    var n=" ";
 
  while(count<9){
 
    var package = Math.floor(Math.random() * 3);
 
    if (previous!=package){
        count++;
    var num = Math.floor(Math.random() * 3);
 
        if(num==0){
            if(package==1) n=n+("R ");
            if(package==2) n=n+("U ");
            if(package==0) n=n+("F ");
 
        }
       
       
        if(num==1){
            if(package==1) n=n+("R' ");
            if(package==2) n=n+("U' ");
            if(package==0) n=n+("F' ");
 
        }
       
       
        if(num==2){
            if(package==1) n=n+("R2 ");
            if(package==2) n=n+("U2 ");
            if(package==0) n=n+("F2 ")
 
        }
 
   
     
        previous = package;
        previous2 = previous-1;
    }
 
   
}
 
message.channel.send({embed: {
  color: 3447003,
  description: n
}});
 
}
	},
};