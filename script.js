
alert("Halo, selamat datang di website saya!");


let nama = prompt("Masukkan nama Anda:");


if (!nama || nama.trim() === "") {
  nama = "Pengunjung";
}

const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  greetingEl.textContent = `Selamat datang, ${nama}!`;
  greetingEl.classList.add("fade-in");
  setTimeout(() => greetingEl.classList.remove("fade-in"), 1400);
}

function tampilkanHalaman(id, event) {
  
  let halaman = document.querySelectorAll(".halaman");
  halaman.forEach((h) => h.classList.remove("aktif"));

  let tombol = document.querySelectorAll(".nav-btn");
  tombol.forEach((t) => t.classList.remove("active"));

  
  const target = document.getElementById(id);
  if (target) target.classList.add("aktif");
  if (event && event.target) event.target.classList.add("active");
}
