let h = new Date().getHours();
let greet = h<12?"Selamat Pagi":h<18?"Selamat Siang":"Selamat Malam";

document.getElementById("greeting").innerText = greet;