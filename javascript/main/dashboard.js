var dashboard = {};

(function () {

    var firebase = app_firebase;

    // Menampilkan data dalam bentuk tabel
    function tampilData() {

        // Buat referensi database firebase
        var dbRef = firebase.database();
        var transaksi = dbRef.ref("transaksi");

        var no_inc = 1;

        // Dapatkan referensi table 
        var table = document.getElementById("tabel-transaksi").getElementsByTagName('tbody')[0];

        // Membuang semua isi table
        $("#tabel-transaksi").find("tr:gt(0)").remove();

        // Memuat Data
        transaksi.on("child_added", function (data, prevChildKey) {
            var data = data.val();

            var row = table.insertRow(table.rows.length);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);
            var cell12 = row.insertCell(11);

            cell1.innerHTML = no_inc++;
            cell2.innerHTML = data.tgl_transaksi;
            cell3.innerHTML = data.penjualan_jenis;
            cell4.innerHTML = data.nama_cust;
            cell5.innerHTML = data.leasing;
            cell6.innerHTML = data.penjualan_jenis;
            cell7.innerHTML = data.jml_unit;
            cell8.innerHTML = data.payment;
            cell9.innerHTML = data.piutang_um;
            cell10.innerHTML = data.piutang_leasing;
            cell11.innerHTML = data.no_polisi;
            cell12.innerHTML = data.note_penjualan;
        });

    }

    dashboard.tampilData = tampilData;

    function seleksi4cetakPOunit() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {
                    window.location.href = "cetakPOunit.html";
                }
            }
        })
    }
    dashboard.seleksi4cetakPOunit = seleksi4cetakPOunit;
})()