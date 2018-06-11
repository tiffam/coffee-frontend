//user input

function request() {
    var coffee = Number(document.getElementById("coffee").value);
    var sugar = Number(document.getElementById("sugar").value);
    var c_milk = Number(document.getElementById("c_milk").value);
    var e_milk = Number(document.getElementById("e_milk").value);
	
	if (coffee === 2 && sugar === 2 && c_milk === 0 && e_milk === 0) {
		alert("Kopi-O");
	} 	else if (coffee === 3 && sugar === 2 && c_milk === 0 && e_milk === 0) {
		alert("Kopi-O Gau");
	}	else if (coffee === 1 && sugar === 2 && c_milk === 0 && e_milk === 0) {
		alert("Kopi-Po");
	}	else if (coffee === 2 && sugar === 1 && c_milk === 0 && e_milk === 0) {
		alert("Kopi-O Siew Dai");
	}	else if (coffee === 2 && sugar === 1 && c_milk === 0 && e_milk === 0) {
		alert("Kopi-O Siew Dai");
	}	else if (coffee === 2 && sugar === 2 && c_milk === 1 && e_milk === 0) {
		alert("Kopi");
	}	else if (coffee === 3 && sugar === 2 && c_milk === 1 && e_milk === 0) {
		alert("Kopi Gau");
	}	else if (coffee === 1 && sugar === 2 && c_milk === 1 && e_milk === 0) {
		alert("Kopi Po");
	}	else if (coffee === 2 && sugar === 1 && c_milk === 1 && e_milk === 0) {
		alert("Kopi Siew Dai");
	}	else if (coffee === 2 && sugar === 1 && c_milk === 1 && e_milk === 0) {
		alert("Kopi Siew Dai");
	}	else if (coffee === 2 && sugar === 2 && c_milk === 2 && e_milk === 0) {
		alert("Kopi Gah Dai");
	}   else if (coffee === 2 && sugar === 2 && c_milk === 0 && e_milk === 1) {
		alert("Kopi Si");
	}	else if (coffee === 2 && sugar === 0 && c_milk === 0 && e_milk === 1) {
		alert("Kopi Si Kosong");
	}	else if (coffee === 2 && sugar === 0 && c_milk === 0 && e_milk === 0) {
		alert("Kopi Kosong");
	}	else {
		alert("It's not in the usual coffee menu but you can try asking for a customised drink")
	}




}
