function cekResi(){
  const input = document.getElementById("resi").value.trim();
  const hasil = document.getElementById("hasil");

  if(!input){
    alert("Masukkan nomor DO!");
    return;
  }

  if(typeof dataTracking === "undefined"){
    alert("dataTracking tidak terbaca!");
    return;
  }

  if(dataTracking[input]){
    const d = dataTracking[input];

    hasil.innerHTML = `
      <h3>${d.nama}</h3>
      <p>Status: ${d.status}</p>
      <p>Ekspedisi: ${d.ekspedisi}</p>
    `;
  } else {
    alert("Data tidak ditemukan!");
  }
}