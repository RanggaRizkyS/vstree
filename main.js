var tree_healt = 100;
var coins = 0;
var treeLvl = 1;
var healt = localStorage.getItem("tree_healt");
var coins = localStorage.getItem("coins");
var treelvl = localStorage.getItem("treeLvl");

if (treeLvl === 1) {
	document.getElementById("btn-3").innerHTML = "Cost 500";
}

function shopClick() {
	document.getElementById("shopHide").style.display = "inline";
	if (treeLvl === 1) {
		function treeClick() {
			if (coins > 500) {
				tree_healt += 200;
				coins -= 500;
				console.log(coins);
				console.log(tree_healt);
			}
		}
	}
}

function treeClick() {
	if (treeLvl === 1) {
		if (coins > 500) {
			tree_healt += 200;
			coins -= 500;
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
	localStorage.setItem("tree_healt", tree_healt);
    localStorage.setItem("coins", coins += coinEarn);
    localStorage.setItem("treeLvl", treeLvl);
}

localStorage.setItem("tree_healt", tree_healt);
localStorage.setItem("coins", coins);
localStorage.setItem("treeLvl", treeLvl);