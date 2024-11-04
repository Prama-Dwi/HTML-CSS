function submitForm(event) {
    event.preventDefault(); // Mencegah reload otomatis

    // Ambil nilai input dari form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const photography = document.querySelector('input[name="photography"]:checked').value;
    const musicGenre = document.getElementById("musicGenre").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Format pesan hasil pengisian form
    const message = `Nama: ${name}\nUsia: ${age}\nPilihan Fotografi: ${photography}\nGenre Musik: ${musicGenre}\nKomentar: ${comment}\nRating: ${rating}\nTanggal: ${date}\nWaktu: ${time}`;
    
    // Tampilkan alert dengan judul "Berhasil!" dan isi data
    alert(`Berhasil!\n\n${message}`);
}
