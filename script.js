alert("Selamat Datang di Ticket APP \n Yang bisa masuk hanya umur 13 tahun keatas");

const umur = prompt("Masukkan umur anda");

if (umur >= 13) {
    const studio = prompt("MAsukkan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");

    if (studio == "A","a" || studio == "B","b" || studio == "C","c") {
        const film = prompt("Pilih film \n 1 : Alok \n 2 : Hayato \n 3 : Kelly");

        let namafilm
        if (film == "1") {
            namafilm = "Alok";
        } else if (film == "2") {
            namafilm = "Hayato";
        } else if (film == "3") {
            namafilm = "Kelly";
        }

        if (film == "1" || film == "2" || film == "3") {
        const nama = prompt("Masukkan nama anda");

        alert(`Berikut tiket anda! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namafilm}`);
    } else {
        alert("Maaf film yang anda pilih tidak tersedia");
    }
   } else {
    alert("Anda harus memilih studio");
    }
} else {
    alert("Maaf tidak bisa masuk, umur anda dibawah 13 tahun");
}