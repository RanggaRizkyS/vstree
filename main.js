var tree_healt = 100;
var coins = 0;

function punchClick() {
	var punch = Math.round(Math.random()*5)+5;
	tree_healt -= punch;
	if (tree_healt < 0) {
		document.getElementById("btn-1").style.display = "none";
		swal({
           title: "Cooldown",
           text: "Cooldown in 5 Sec",
           type: "success",
           timer: 5000
           });
           function(){
              location.reload(true);
              tr.hide();
           };
		setTimeout(() => { document.getElementById("btn-1").style.display = "inline"; }, 5000);
	};
	var coinEarn = Math.round(Math.random()*1)+5;
	coins += coinEarn
	document.getElementById("coins").innerHTML = coins;
	console.log(coins);
}