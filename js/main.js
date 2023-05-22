let randomQuote = document.querySelector('.randomQuote');
// let newQuote= document.querySelector('.newQuote');
let Quotes=[`“Be yourself; everyone else is already taken.”
<br>
― Oscar Wilde`,
`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
<br>
― Marilyn Monroe`,
 `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
 <br>
― Albert Einstein`,
`Marcus Tullius Cicero
“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
 `“So many books, so little time.”
 <br>
― Frank Zappa`,
`“You only live once, but if you do it right, once is enough.”
<br>
― Mae West`];

function randomQuotes(Quotes) {

   return  Quotes[Math.floor(Math.random()*Quotes.length)];
   
};

$('.newQuote').click(function(){
   $('.randomQuote').html(randomQuotes(Quotes));
});







