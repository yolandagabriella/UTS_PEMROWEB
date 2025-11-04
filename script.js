// Alert sapaan awal (masih muncul saat halaman dibuka)
alert("Halo, selamat datang di website saya!");

// Prompt meminta nama pengguna
let nama = prompt("Masukkan nama Anda:");

// Jika user tidak isi nama (klik batal atau kosong), set default "Pengunjung"
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
  // Sembunyikan semua halaman
  let halaman = document.querySelectorAll(".halaman");
  halaman.forEach((h) => h.classList.remove("aktif"));

  let tombol = document.querySelectorAll(".nav-btn");
  tombol.forEach((t) => t.classList.remove("active"));

  // Tampilkan halaman yang dipilih & tandai tombol aktif
  const target = document.getElementById(id);
  if (target) target.classList.add("aktif");
  if (event && event.target) event.target.classList.add("active");
}
