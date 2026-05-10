function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!email || !password){
    alert("Isi semua field!");
    return;
  }

  if(typeof dataPengguna === "undefined"){
    alert("data.js tidak terbaca!");
    return;
  }

  const user = dataPengguna.find(u => u.email === email && u.password === password);

  if(user){
    window.location.href = "dashboard.html";
  } else {
    alert("Email / Password salah!");
  }
}