function hitung() {
    let pilihan = document.getElementById("pilihan").value; // Ambil pilihan dari dropdown
    let hasil = 0;

    switch (pilihan) {
        case "persegi":
            let sisi = parseFloat(document.getElementById("input1").value);
            let operasiPersegi = document.getElementById("operasi").value;

            if (operasiPersegi === "luas") {
                hasil = sisi * sisi;
                document.getElementById("hasil").innerText = `Luas Persegi: ${hasil}`;
            } else if (operasiPersegi === "keliling") {
                hasil = 4 * sisi;
                document.getElementById("hasil").innerText = `Keliling Persegi: ${hasil}`;
            }
            break;

        case "persegiPanjang":
            let panjang = parseFloat(document.getElementById("input1").value);
            let lebar = parseFloat(document.getElementById("input2").value);
            let operasiPersegiPanjang = document.getElementById("operasi").value;

            if (operasiPersegiPanjang === "luas") {
                hasil = panjang * lebar;
                document.getElementById("hasil").innerText = `Luas Persegi Panjang: ${hasil}`;
            } else if (operasiPersegiPanjang === "keliling") {
                hasil = 2 * (panjang + lebar);
                document.getElementById("hasil").innerText = `Keliling Persegi Panjang: ${hasil}`;
            }
            break;

        default:
            document.getElementById("hasil").innerText = "Silakan pilih bentuk dan operasi.";
    }
}
