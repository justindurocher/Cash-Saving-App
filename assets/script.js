var quotes = Array('"Money is the motivation."','"Apply yourself to supply your wealth"','"A penny saved is a penny earned."','"Save Save Save!"','"Only thing holding you back is you, yourself!"');

var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

$(".quote").text(randomQuote);
    
$(".easyCashSaver").click(function(){
    window.location.href = "easyMoneySaver.html";
});