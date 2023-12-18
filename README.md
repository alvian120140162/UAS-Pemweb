# UAS-Pemweb
Nama  : Alvian Manshurin<br>
Nim   : 120140162<br>
Kelas : RC

<h2>Bagian 1: Client-side Programming (Bobot: 30%)</h2>
1.1 (15%) Buatlah sebuah halaman web sederhana yang memanfaatkan JavaScript untuk melakukan manipulasi DOM.

Panduan:
- Buat form input dengan minimal 4 elemen input (teks, checkbox, radio, dll.) 4 element input yang berada pada web ini bertype text, number, select, dan juga checkbox
- Menampilkan data dari server kedalam sebuah halaman menggunakan tag `table` sudah di lakukan pada index.html line 44-47<br>

1.2 (15%) Buatlah beberapa event untuk menghandle interaksi pada halaman web

Panduan:
- Tambahkan minimal 3 event yang berbeda untuk menghandle form pada 1.1
- Implementasikan JavaScript untuk validasi setiap input sebelum diproses oleh PHP

<h2>Bagian 2: Server-side Programming (Bobot: 30%)</h2>
2.1 (20%) Implementasikan script PHP untuk mengelola data dari formulir pada Bagian 1 menggunakan variabel global seperti `$_POST` atau `$_GET`. Tampilkan hasil pengolahan data ke layar.

Panduan:
- Gunakan metode POST atau GET pada formulir.
- Parsing data dari variabel global dan lakukan validasi disisi server
- Simpan ke basisdata termasuk jenis browser dan alamat IP pengguna<br>

2.2 (10%) Buatlah sebuah objek PHP berbasis OOP yang memiliki minimal dua metode dan gunakan objek tersebut dalam skenario tertentu pada halaman web Anda.

Panduan:
- Objek yang dibuat harus terkait dengan konteks pengembangan web saat ini.

<h2>Bagian 3: Database Management (Bobot: 20%)</h2>
3.1 (5%) Buatlah sebuah tabel pada database MySQL

Panduan:
- Lampirkan langkah-langkah dalam membuat basisdata dengan syntax basisdata<br>

3.2 (5%) Buatlah konfigurasi koneksi ke database MySQL pada file PHP. Pastikan koneksi berhasil dan dapat diakses.

Panduan:
- Gunakan konstanta atau variabel untuk menyimpan informasi koneksi (host, username, password, nama database).<br>

3.3 (10%) Lakukan manipulasi data pada tabel database dengan menggunakan query SQL. Misalnya, tambah data, ambil data, atau update data.

Panduan:
- Gunakan query SQL yang sesuai dengan skenario yang diberikan.

<h2>Bagian 4: State Management (Bobot: 20%)</h2>
4.1 (10%) Buatlah skrip PHP yang menggunakan session untuk menyimpan dan mengelola state pengguna. Implementasikan logika yang memanfaatkan session.

Panduan:
- Gunakan `session_start()` untuk memulai session.
- Simpan informasi pengguna ke dalam session.<br>

4.2 (10%) Implementasikan pengelolaan state menggunakan cookie dan browser storage pada sisi client menggunakan JavaScript.

Panduan:
- Buat fungsi-fungsi untuk menetapkan, mendapatkan, dan menghapus cookie.
- Gunakan browser storage untuk menyimpan informasi secara lokal.

<h2>Bagian Bonus: Hosting Aplikasi Web (Bobot: 20%)</h2>
Bagian bonus ini akan memberikan bobot tambahan 20% jika Anda berhasil meng-host aplikasi web yang Anda buat. Jawablah pertanyaan-pertanyaan berikut:

- (5%) Apa langkah-langkah yang Anda lakukan untuk meng-host aplikasi web Anda?
-- Buat Akun di InfinityFree
--  Daftar Domain atau Gunakan Subdomain InfinityFree
--  Login Ke Control Panel
--  Upload dan Tambahkan file website ke control panel
--  Kembali ke infinityFree lalu buat database pada menu MySQLDatabase
--  Tekan Create Database dan masukkan nama database lalu lanjutkan dengan menekan tombol Create Database lagi
--  Masuk ke PHPMyAdmin
--  Import atau buat database sesuai kebutuhan website
--  Setelah setup database berhasil, selanjutnya adalah merubah variabel koneksi dari file koneksi.php melalui control panel dan diubah mengikuti host, username, password, dan nama database yang diberikan infinityfree
--  Setelah berhasil merubah host,username,password dan database seharusnya website sudah terhubung dengan database yang kita buat sebelumnya
--  Selanjutnya adalah uji coba situs web

- (5%) Pilih penyedia hosting web yang menurut Anda paling cocok untuk aplikasi web Anda. Berikan alasan Anda. => Menggunakan infinityfree, karena gratis cukup mudah dalam penggunaannya
- (5%) Bagaimana Anda memastikan keamanan aplikasi web yang Anda host?<br>
Selalu validasi input yang diterima dari pengguna untuk mencegah serangan injeksi seperti SQL injection, XSS, dan CSRF.<br>
Pastikan pengelolaan sesi yang aman dan periksa otentikasi pengguna.

- (5%) Jelaskan konfigurasi server yang Anda terapkan untuk mendukung aplikasi web Anda.
