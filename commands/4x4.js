module.exports = {
	name: '4',
	description: 'get a 4x4 scramble',
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
  var twenty=20;
  var six=6;
  var n=" ";
 
   do{
 
   var package = Math.floor(Math.random() * six);
 
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
           if(package==6) n=n+("Rw ");
           if(package==7) n=n+("Uw ");
           if(package==8) n=n+("Fw ");
 
       }
     
     
       if(num==2){
           if(package==0) n=n+("L' ");
           if(package==1) n=n+("R' ");
           if(package==2) n=n+("U' ");
           if(package==3) n=n+("D' ");
           if(package==4) n=n+("F' ");
           if(package==5) n=n+("B' ");
           if(package==6) n=n+("Rw' ");
           if(package==7) n=n+("Uw' ");
           if(package==8) n=n+("Fw' ");
 
       }
     
     
       if(num==1){
           if(package==0) n=n+("L2 ");
           if(package==1) n=n+("R2 ");
           if(package==2) n=n+("U2 ");
           if(package==3) n=n+("D2 ");
           if(package==4) n=n+("F2 ");
           if(package==5) n=n+("B2 ");
           if(package==6) n=n+("Rw2 ");
           if(package==7) n=n+("Uw2 ");
           if(package==8) n=n+("Fw2 ");
 
       }
   
   
       previous = package;
       previous2 = previous-1;
   }
}
 
 
 
  if(count>16){
     six=9;
     twenty=40;
   }
 
   }while(count<twenty);
 
message.channel.send({embed: {
  color: 3447003,
  description: n
}});
}
	},
};