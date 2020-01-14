var quotes = Array('"Money is the motivation."','"Apply yourself to supply your wealth"','"A penny saved is a penny earned."','"Save Save Save!"');

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

$(".quote").text(randomQuote);
    
$(".easyCashSaver").click("")