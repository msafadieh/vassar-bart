var currentSize = 50;
var click = 0;
var money = 0
var random = Math.floor(Math.random() * 5 + 5);
function onClick() {
  if (click == random) {
    document.getElementById('balloon').style.display = 'none';
    document.getElementById('popped').style.display = 'block';
    document.getElementById('money').innerHTML = 'You lost all your money!';
    click += 1;
  }
  else if (click > random) {
    currentSize = 50;
    click = 0;
    random = Math.floor(Math.random() * 5 + 5);
    money = 0;
    document.getElementById('balloon').style.width = currentSize + 'px';
    document.getElementById('money').innerHTML = '$' + money;
    document.getElementById('balloon').style.display = 'block';
    document.getElementById('popped').style.display = 'none';
  }
  else {
    currentSize += 25;
    click += 1;
    document.getElementById('balloon').style.width = currentSize + 'px';
    money += 5;
    document.getElementById('money').innerHTML = '$' + money;
  }
}
