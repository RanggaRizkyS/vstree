var tree_healt = 100;
var coins = 0;
var punchLvl = 1;

function shopClick() {
	document.getElementById("shopHide").style.display = "inline";
	if (punchLvl === 1) {
		function punchClick() {
			if (coins > 500) {
				tree_healt += 200;
				coins -= 500;
				console.log(coins);
			}
		}
	}
}

function punchClick() {
	var punch = Math.round(Math.random()*5)+5;
	tree_healt -= punch;
	if (tree_healt < 0) {
		document.getElementById("btn-1").style.display = "none";
           Swal.fire({
            title: 'Cooldown',
            text: 'Cooldown 5 Sec',
            type: "success",
            timer: 5000
           })
           var func = function() {
              location.reload(true);
              tr.hide();
           };
		setTimeout(() => { tree_healt += 100; document.getElementById("btn-1").style.display = "inline"; }, 5000);
	};
	var coinEarn = Math.round(Math.random()*1)+5;
	coins += coinEarn
	document.getElementById("coins").innerHTML = coins;
	console.log(coins);
}