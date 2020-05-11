module.exports = {
	name: '3',
	description: 'get a 3x3 scramble',
	execute(message, args) {
        let amount = args.slice(0).join(' ');
        if(!amount) amount = 1;
        if(amount>12) {
        let buffer = amount
        amount = 12;
  
    }
        if(amount==0) message.channel.send('Amount of scrambles shown: your IQ :smirk:');
  
    for(var i = 0;i<amount;i++){
            var num;
        var package;
        var previous;
        var count = 0;
        var previous2;
        var n=" ";
  
  
      while(count<18){
  
        var package = Math.floor(Math.random() * 6);
  
        if (previous2!=package){
        if (previous!=package){
            count++;
        var num = Math.floor(Math.random() * 3);
  
            if(num==0){
                if(package==0) n=n+("L ");
                if(package==1) n=n+("R ");
                if(package==2) n=n+("U ");
                if(package==3) n=n+("D ");
                if(package==4) n=n+("F ");
                if(package==5) n=n+("B ");
  
            }
  
  
            if(num==1){
                if(package==0) n=n+("L' ");
                if(package==1) n=n+("R' ");
                if(package==2) n=n+("U' ");
                if(package==3) n=n+("D' ");
                if(package==4) n=n+("F' ");
                if(package==5) n=n+("B' ");
  
            }
  
  
            if(num==2){
                if(package==0) n=n+("L2 ");
                if(package==1) n=n+("R2 ");
                if(package==2) n=n+("U2 ");
                if(package==3) n=n+("D2 ");
                if(package==4) n=n+("F2 ");
                if(package==5) n=n+("B2 ");
  
  
            }
  
  
  
            previous = package;
            previous2 = previous-1;
        }
  
  
    } 
    }
  
    message.channel.send({embed: {
      color: 3447003,
      description: n
    }});
    }
    if (buffer>12) {message.channel.send('12 is max bruh. Think im actually finna spam '+ buffer + ' scrams lookin ass. smh')}
	},
};