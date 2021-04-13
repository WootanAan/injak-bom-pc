var kamuTop;
var kamuKiri;
var skor = 0;
var skorTertinggi = 0;
var ilang;
var bom1Top;var bom1Kiri;
var bom2Top;var bom2Kiri;
var bom3Top;var bom3Kiri;
var bom4Top;var bom4Kiri;
var bom5Top;var bom5Kiri;
var bom6Top;var bom6Kiri;
var bom7Top;var bom7Kiri;
var bom8Top;var bom8Kiri;
var bom9Top;var bom9Kiri;
var makananTop = acak();var makananKiri = acak();

function acak(){
	return (Math.floor(Math.random() * 19) + 1) * 5;
}

function mulai() {
	document.addEventListener("keydown",pencet);
	skor = 0;
	ilang = 1;
	kamuTop = acak();
	kamuKiri = acak();
	bom1Top = acak();bom1Kiri = acak();
	bom2Top = acak();bom2Kiri = acak();
	bom3Top = acak();bom3Kiri = acak();
	bom4Top = acak();bom4Kiri = acak();
	bom5Top = acak();bom5Kiri = acak();
	bom6Top = acak();bom6Kiri = acak();
	bom7Top = acak();bom7Kiri = acak();
	bom8Top = acak();bom8Kiri = acak();
	bom9Top = acak();bom9Kiri = acak();
	document.getElementById('kamu').style = "left: "+kamuKiri+"vw;top: "+kamuTop+"vh; opacity: " + ilang + ";";
	document.getElementById('bom1').style = "left: "+bom1Kiri+"vw;top: "+bom1Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom2').style = "left: "+bom2Kiri+"vw;top: "+bom2Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom3').style = "left: "+bom3Kiri+"vw;top: "+bom3Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom4').style = "left: "+bom4Kiri+"vw;top: "+bom4Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom5').style = "left: "+bom5Kiri+"vw;top: "+bom5Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom6').style = "left: "+bom6Kiri+"vw;top: "+bom6Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom7').style = "left: "+bom7Kiri+"vw;top: "+bom7Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom8').style = "left: "+bom8Kiri+"vw;top: "+bom8Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"vw;top: "+bom9Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"vw;top: "+bom9Top+"vh; opacity: " + ilang + ";";
	document.getElementById('makanan').style = "left: "+makananKiri+"vw;top: "+makananTop+"vh;";
	document.getElementById('tertinggi').innerHTML = skorTertinggi;
}

function atas(){
	kamuTop += -5;
	cek();
	document.getElementById('kamu').style = "left: "+kamuKiri+"vw;top: "+kamuTop+"vh; border-top-left-radius: 50%; border-top-right-radius: 50%;";
}

function bawah(){
	kamuTop += 5;
	cek();
	document.getElementById('kamu').style = "left: "+kamuKiri+"vw;top: "+kamuTop+"vh; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%;";
}

function kiri(){
	kamuKiri += -5;
	cek();
	document.getElementById('kamu').style = "left: "+kamuKiri+"vw;top: "+kamuTop+"vh; border-top-left-radius: 50%; border-bottom-left-radius: 50%;";
}

function kanan(){
	kamuKiri += 5;
	cek();
	document.getElementById('kamu').style = "left: "+kamuKiri+"vw;top: "+kamuTop+"vh; border-top-right-radius: 50%; border-bottom-right-radius: 50%;";
}

function cek(){

	if (kamuTop == makananTop && kamuKiri == makananKiri) {
		menang();
	} else if (kamuTop == bom1Top && kamuKiri == bom1Kiri) {
		kalah();
	} else if (kamuTop == bom2Top && kamuKiri == bom2Kiri) {
		kalah();
	} else if (kamuTop == bom3Top && kamuKiri == bom3Kiri) {
		kalah();
	} else if (kamuTop == bom4Top && kamuKiri == bom4Kiri) {
		kalah();
	} else if (kamuTop == bom5Top && kamuKiri == bom5Kiri) {
		kalah();
	} else if (kamuTop == bom6Top && kamuKiri == bom6Kiri) {
		kalah();
	} else if (kamuTop == bom7Top && kamuKiri == bom7Kiri) {
		kalah();
	} else if (kamuTop == bom8Top && kamuKiri == bom8Kiri) {
		kalah();
	} else if (kamuTop == bom9Top && kamuKiri == bom9Kiri) {
		kalah();
	} else if (kamuTop > 95) {
		kamuTop = 0;
	} else if (kamuKiri > 95) {
		kamuKiri = 0;
	} else if (kamuTop < 0) {
		kamuTop = 95;
	} else if (kamuKiri < 0) {
		kamuKiri = 95;
	} else {}
	ilang -= 0.01;
	document.getElementById('bom1').style = "left: "+bom1Kiri+"vw;top: "+bom1Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom2').style = "left: "+bom2Kiri+"vw;top: "+bom2Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom3').style = "left: "+bom3Kiri+"vw;top: "+bom3Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom4').style = "left: "+bom4Kiri+"vw;top: "+bom4Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom5').style = "left: "+bom5Kiri+"vw;top: "+bom5Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom6').style = "left: "+bom6Kiri+"vw;top: "+bom6Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom7').style = "left: "+bom7Kiri+"vw;top: "+bom7Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom8').style = "left: "+bom8Kiri+"vw;top: "+bom8Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"vw;top: "+bom9Top+"vh; opacity: " + ilang + ";";
	document.getElementById('bom9').style = "left: "+bom9Kiri+"vw;top: "+bom9Top+"vh; opacity: " + ilang + ";";
}

function kalah() {
	document.getElementById('skor').innerHTML = "skor terakhir anda: "+skor;
	if (skor >= skorTertinggi) {skorTertinggi = skor;}
	mulai();
}

function menang() {
	makananTop = acak();makananKiri = acak();
	skor += 10;
	document.getElementById('skor').innerHTML = "skor: "+skor;
	document.getElementById('makanan').style = "left: "+makananKiri+"vw;top: "+makananTop+"vh;";
}

function pencet(evt) {
	switch(evt.keyCode) {
		case 37:
			kiri();
			break;
		case 38:
			atas();
			break;
		case 39:
			kanan();
			break;
		case 40:
			bawah();
			break;
	}
}