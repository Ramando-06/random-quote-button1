/**
PENGAMBILAN ELEMEN DOM (Document Object Model)
 * Sumber: MDN Web Docs - Document.getElementById()
 * Fungsi: Mengembalikan objek Element yang id-nya cocok dengan string yang ditentukan.
 * Digunakan untuk menghubungkan elemen HTML ke dalam variabel JavaScript agar bisa dimanipulasi.
 */
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("quote-btn");
let lastIndex = -1;

/**
 * FUNGSI GENERATE QUOTE ACAK
 * Sumber Logika Acak: MDN Web Docs - Math.random() & Math.floor()
 * Sumber Perulangan: W3Schools - JavaScript Do While Loop
 */
function getRandomQuote() {
  let index;
 
  /**
   * PENGGUNAAN DO...WHILE LOOP
   * Sumber: MDN Web Docs - do...while statement
   * Karakteristik: Blok kode di dalam `do` akan DIJALANKAN MINIMAL SATU KALI sebelum kondisi 
   * di dalam `while` dievaluasi.
   * Logika di bawah: Sistem akan terus mengacak angka JIKA indeks yang baru dihasilkan 
   * SAMA DENGAN indeks sebelumnya (`index === lastIndex`), untuk menghindari duplikasi berurutan.
   */
  do {
    index = Math.floor(Math.random() * QUOTES.length);
  } while (index === lastIndex && QUOTES.length > 1);
  lastIndex = index;
  return QUOTES[index];
}

/**
 * FUNGSI MANIPULASI TAMPILAN (RENDER DOM)
 * Sumber: MDN Web Docs - Destructuring assignment & Node.textContent
 */
function showQuote() {
  
/**
   * DESTRUCTURING ASSIGNMENT (ES6)
   * Sumber: MDN Web Docs - Destructuring assignment
   * Fungsi: Membongkar nilai properti dari object (text dan author) langsung ke dalam variabel terpisah.
   */
  const { text, author } = getRandomQuote();
  quoteEl.textContent = `"${text}"`;
  authorEl.textContent = `— ${author}`;
}

/**
 * EVENT HANDLING (MENANGKAP AKSI PENGGUNA)
 * Sumber: MDN Web Docs - EventTarget.addEventListener()
 * Fungsi: Mendaftarkan event handler (fungsi showQuote) pada sebuah event (klik tombol).
 * Ketika tombol 'New Quote' diklik, browser akan otomatis menjalankan fungsi showQuote.
 */
button.addEventListener("click", showQuote);
/**
 * INITIALIZATION (TAMPILAN AWAL)
 * Sumber: Stack Overflow / Best Practice
 * Fungsi: Memanggil fungsi showQuote() sekali saat file pertama kali dimuat oleh browser.
 * Tujuannya agar halaman tidak kosong (menampilkan instruksi bawaan HTML) melainkan langsung 
 * menyajikan satu quote acak pertama kali user membuka website.
