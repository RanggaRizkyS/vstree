localStorage.setItem("mgo", 0);
var mgo = 0;
var encrypted = CryptoJS.AES.encrypt(localStorage.setItem("coins"), "coinsEnc");
console.log(encrypted);
var decrypted = CryptoJS.AES.decrypt(localStorage.setItem("coins"), "coinsEnc");
console.log(decrypted);
if(!localStorage.getItem("visited")){
	localStorage.setItem("coins", 0);
	localStorage.setItem("visited", "yes");
}
var coins = localStorage.getItem("coins");
var tree_healt = 100;
var treeLvl = 1;

if (treeLvl === 1) {
	document.getElementById("btn-3").innerHTML = "Cost 500";
}

if (localStorage.getItem("mgo") === 0) {
	localStorage.setItem("mgo", 1);
	if (localStorage.getItem('coins') === undefined) {
       localStorage.setItem('coins', coinEarnsuc);  
    }
}
document.getElementById("coins").innerHTML = coins;

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
	var coin = localStorage.getItem("coins");
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
	var coinEarn = Math.round(Math.random()*1)+9;
    var c = parseInt(localStorage.getItem("coins"));
	var coinEarnsuc = c += coinEarn
    document.getElementById("coins").innerHTML = coinEarnsuc;
    if (localStorage.getItem('coins') === undefined) {
       localStorage.setItem('coins', coinEarnsuc);  
    }
    localStorage.setItem("coins", coinEarnsuc);
}

function saveClick() {
	localStorage.setItem("coins", coin);
}