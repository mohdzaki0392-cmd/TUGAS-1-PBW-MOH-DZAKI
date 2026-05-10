document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("table");

  function render(){
    if(!table) return;

    table.innerHTML = "";

    dataBahanAjar.forEach(d => {
      table.innerHTML += `
        <tr>
          <td>${d.kodeBarang}</td>
          <td>${d.namaBarang}</td>
          <td>${d.stok}</td>
        </tr>
      `;
    });
  }

  render();

  window.tambahData = function(){
    const kode = document.getElementById("kode").value;
    const nama = document.getElementById("nama").value;
    const stok = document.getElementById("stok").value;

    if(!kode || !nama || !stok){
      alert("Isi semua!");
      return;
    }

    dataBahanAjar.push({
      kodeBarang: kode,
      namaBarang: nama,
      stok: stok
    });

    render();
  }
});