function getQuote(){



var author=["-- Oscar Wilde", "-- Frank Zappa ", "-- Marcus Tullius Cicero","-- Mae West",
"-- Mahatma Gandhi", "-- Mark Twain", "-- Friedrich Nietzsche, Twilight of the Idols"];
var quotes=["“Be yourself; everyone else is already taken.”" ,
 "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”", 
  "“You only live once, but if you do it right, once is enough.”",
"“Be the change that you wish to see in the world.”",
"“If you tell the truth, you don't have to remember anything.”" ,
"“Without music, life would be a mistake.”"];

 var num =Math.floor(Math.random()*quotes.length);
 
 document.getElementById("our-qoutes").innerHTML=quotes[num];
 document.getElementById("author-say").innerHTML=author[num];
 
}

    