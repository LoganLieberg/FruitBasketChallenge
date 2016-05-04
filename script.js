$(document).ready(function () {
var FruitCreation = function (name, price) {
	this.name = name;
	this.marketPrice = price;
};
var apple = new FruitCreation ('apple', 1);
var banana = new FruitCreation ('banana', 1);
var orange = new FruitCreation ('orange', 1);
var bear = new FruitCreation ('bear', 1);

var fruitPriceArray = [apple.marketPrice, banana.marketPrice, bear.marketPrice, orange.marketPrice];
var fruitNameArray = [apple, banana, bear, orange];
console.log(fruitPriceArray);

$('#fruitBasket').append('<span>' + apple.name + ' ' + apple.marketPrice + ' ' + '</span>');
$('#fruitBasket').append('<span>' + banana.name + ' ' + banana.marketPrice + ' ' + '</span>');
$('#fruitBasket').append('<span>' + orange.name + ' ' + orange.marketPrice + ' ' + '</span>');
$('#fruitBasket').append('<span>' + bear.name + ' ' + bear.marketPrice + ' ' + '</span>');
var priceChange = window.setInterval(function (){randomPrice(fruitPriceArray);}, 15000);
//$('#fruitBasket span').replaceWith('<span>' + apple.name + priceChange + '</span>');

console.log(priceChange);
function randomPrice (priceInterval) {
	for(var i = 0; i < priceInterval.length; i++){
		priceInterval[i] += randomNumber();
		fruitNameArray[i].marketPrice = priceInterval[i];
	if (priceInterval[i] > 11.50) {
		priceInterval[i] = 11.50;
	} else if (priceInterval[i] < 0.50) {
		priceInterval[i] = 0.50;
	}
		priceInterval[i] = Number(priceInterval[i].toFixed(2));
	}
console.log(fruitPriceArray);
return priceInterval;
}
console.log(fruitPriceArray);

function randomNumber () {

	return Math.random() * (1 + 0.50 + -0.50) + -0.50;

	//randomize a number between 0 and 0.50

}
});
