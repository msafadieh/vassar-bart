var currentSize = 50;
var click = 0;
var money = 0
var random = Math.floor(Math.random() * 128 + 1);
function onClick() {
	if (click == random) {
		document.getElementById('balloon').style.display = 'none';
		document.getElementById('popped').style.display = 'block';
		document.getElementById('money').innerHTML = 'You lost all your money!';
		document.getElementById('cashOut').style.display = 'none';
		document.getElementById('more').style.display = 'none';
	}
	else if (click < random) {
		currentSize += 1; 
		click += 1;
		document.getElementById('balloon').style.width = currentSize + 'px';
		money += 5;
		document.getElementById('money').innerHTML = '$' + money/100;
	}
}
function cashOut() {
	document.getElementById('cashOut').style.display = 'none';
	document.getElementById('more').style.display = 'none';
	document.getElementById('money').innerHTML = "You cashed out: $" + money/100;
}
