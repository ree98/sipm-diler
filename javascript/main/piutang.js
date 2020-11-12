var piutang = {};

(function () {

    var firebase = app_firebase;

    // Menampilkan data dalam bentuk tabel
    function tampilData() {

        // Buat referensi database firebase
        var dbRef = firebase.database();
        var piutang = dbRef.ref("piutang");

        var no_inc = 1;

        var cariData = document.getElementById("cariData").value;

        if (cariData != "") {
            // Dapatkan referensi table 
            var table = document.getElementById("tabel-piutang").getElementsByTagName('tbody')[0];

            // Membuang semua isi table
            $("#tabel-piutang").find("tr:gt(0)").remove();

            // Memuat Data
            piutang.orderByChild("tgl_transaksi").equalTo(cariData).on("child_added", function (data, prevChildKey) {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.tgl_transaksi;
                cell3.innerHTML = data.jatuh_tempo;
                cell4.innerHTML = data.nama_pembeli;
                cell5.innerHTML = data.uang_muka;
                cell6.innerHTML = data.leasing;
                cell7.innerHTML = data.ct_pokok;
                cell8.innerHTML = data.ct_bunga;
                cell9.innerHTML = data.insentif_spf;
                cell10.innerHTML = data.sisa_piutang;
                cell11.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="piutang.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /><path fill - rule = "evenodd" d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />< /svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="piutang.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill - rule = "evenodd" d = "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /><svg></button><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="piutang.detailData_Tampil(' +
                    data.id +
                    ')" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd"  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>< /svg></button> ';
            });
        } else {
            // Dapatkan referensi table 
            var table = document.getElementById("tabel-piutang").getElementsByTagName('tbody')[0];

            // Membuang semua isi table
            $("#tabel-piutang").find("tr:gt(0)").remove();

            // Memuat Data
            piutang.on("child_added", function (data, prevChildKey) {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.tgl_transaksi;
                cell3.innerHTML = data.jatuh_tempo;
                cell4.innerHTML = data.nama_pembeli;
                cell5.innerHTML = data.uang_muka;
                cell6.innerHTML = data.leasing;
                cell7.innerHTML = data.ct_pokok;
                cell8.innerHTML = data.ct_bunga;
                cell9.innerHTML = data.insentif_spf;
                cell10.innerHTML = data.sisa_piutang;
                cell11.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="piutang.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /><path fill - rule = "evenodd" d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />< /svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="piutang.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill - rule = "evenodd" d = "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /><svg></button><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="piutang.detailData_Tampil(' +
                    data.id +
                    ')" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd"  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>< /svg></button> ';
            });
        }
        $('#cariData').val('');
    }
    piutang.tampilData = tampilData;

    // Mengambil id terakhir dan membahkan dengan 1 dan memasukkan kedalam text id di modal tambah
    function ambilDataTerakhir() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalAdd").modal();

                    $('#tgl_transaksi').val("");
                    $('#pembayaran').val("");
                    $('#jatuh_tempo').val("");
                    $('#nama_pembeli').val("");
                    $('#alamat_pembeli').val("");
                    $('#uang_muka').val("");
                    $('#leasing').val("");
                    $('#ct_pokok').val("");
                    $('#ct_bunga').val("");
                    $('#insentif_spf').val("");
                    $('#sisa_piutang').val("");
                    $('#note_piutang').val("");

                    var dbRef_ambilDataTerakhir = firebase.database();
                    var cariAkhir = dbRef_ambilDataTerakhir.ref("piutang");
                    cariAkhir.limitToLast(1).on('child_added', function (dataAkhir) {
                        var snap = dataAkhir.val();
                        var id_record_terakhir = snap.id + 1;
                        document.getElementById("id").value = id_record_terakhir;
                    });
                }
            }
        })

    }
    piutang.ambilDataTerakhir = ambilDataTerakhir;

    // Melakukan proses penambahan data
    function addData_Proses() {
        var id = $('#id').val();
        var tgl_transaksi = $('#tgl_transaksi').val();
        var pembayaran = $('#pembayaran').val();
        var jatuh_tempo = $('#jatuh_tempo').val();
        var nama_pembeli = $('#nama_pembeli').val();
        var alamat_pembeli = $('#alamat_pembeli').val();
        var uang_muka = $('#uang_muka').val();
        var leasing = $('#leasing').val();
        var ct_pokok = $('#ct_pokok').val();
        var ct_bunga = $('#ct_bunga').val();
        var insentif_spf = $('#insentif_spf').val();
        var sisa_piutang = $('#sisa_piutang').val();
        var note_piutang = $('#note_piutang').val();

        var dbRef_add_proses = firebase.database();

        // Isikan data kedalam firebase
        var addUnit = dbRef_add_proses.ref("piutang/" + id);

        addUnit.set({

            id: parseInt(id),
            tgl_transaksi: tgl_transaksi,
            pembayaran: pembayaran,
            jatuh_tempo: jatuh_tempo,
            nama_pembeli: nama_pembeli,
            alamat_pembeli: alamat_pembeli,
            uang_muka: uang_muka,
            leasing: leasing,
            ct_pokok: ct_pokok,
            ct_bunga: ct_bunga,
            insentif_spf: insentif_spf,
            sisa_piutang: sisa_piutang,
            note_piutang: note_piutang

        });

        $('#ModalAdd').modal('hide');
        tampilData();
    }
    piutang.addData_Proses = addData_Proses;

    // Menampilkan data yang akan di update kedalam modal update
    function updateData_Tampil(id) {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalUpdate").modal();

                    $('#show_id').val(id);

                    var dbRef_update_tampil = firebase.database();
                    var unitByID = dbRef_update_tampil.ref("piutang/" + id);

                    unitByID.on("value", function (snapshot) {
                        var childData = snapshot.val();
                        $('#show_tgl_transaksi').val(childData.tgl_transaksi);
                        $('#show_pembayaran').val(childData.pembayaran);
                        $('#show_jatuh_tempo').val(childData.jatuh_tempo);
                        $('#show_nama_pembeli').val(childData.nama_pembeli);
                        $('#show_alamat_pembeli').val(childData.alamat_pembeli);
                        $('#show_uang_muka').val(childData.uang_muka);
                        $('#show_leasing').val(childData.leasing);
                        $('#show_ct_pokok').val(childData.ct_pokok);
                        $('#show_ct_bunga').val(childData.ct_bunga);
                        $('#show_insentif_spf').val(childData.insentif_spf);
                        $('#show_sisa_piutang').val(childData.sisa_piutang);
                        $('#show_note_piutang').val(childData.note_piutang);
                    });
                }
            }
        })

    }
    piutang.updateData_Tampil = updateData_Tampil;

    // Melakukan proses update data
    function updateData_Proses() {
        var id = $('#show_id').val();
        var tgl_transaksi = $('#show_tgl_transaksi').val();
        var pembayaran = $('#show_pembayaran').val();
        var jatuh_tempo = $('#show_jatuh_tempo').val();
        var nama_pembeli = $('#show_nama_pembeli').val();
        var alamat_pembeli = $('#show_alamat_pembeli').val();
        var uang_muka = $('#show_uang_muka').val();
        var leasing = $('#show_leasing').val();
        var ct_pokok = $('#show_ct_pokok').val();
        var ct_bunga = $('#show_ct_bunga').val();
        var insentif_spf = $('#show_insentif_spf').val();
        var sisa_piutang = $('#show_sisa_piutang').val();
        var note_piutang = $('#show_note_piutang').val();

        var dbRef_update_proses = firebase.database();
        var update_unit = dbRef_update_proses.ref("piutang/" + id);

        update_unit.update({
            "tgl_transaksi": tgl_transaksi,
            "pembayaran": pembayaran,
            "jatuh_tempo": jatuh_tempo,
            "nama_pembeli": nama_pembeli,
            "alamat_pembeli": alamat_pembeli,
            "uang_muka": uang_muka,
            "leasing": leasing,
            "ct_pokok": ct_pokok,
            "ct_bunga": ct_bunga,
            "insentif_spf": insentif_spf,
            "sisa_piutang": sisa_piutang,
            "note_piutang": note_piutang
        });

        $('#ModalUpdate').modal('hide');
        tampilData();
    }
    piutang.updateData_Proses = updateData_Proses;

    // Melakukan proses delete data yang telah dikonfirmasi sebelumnya
    function delData_Proses() {
        var id = $('#id').val();

        var dbRef_delete = firebase.database();
        var insentif_spfAlat = dbRef_delete.ref("piutang/" + id);
        insentif_spfAlat.remove();
        $('#ModalDel').modal('hide');
        tampilData();
    }
    piutang.delData_Proses = delData_Proses;

    // Memasukkan id ke textbox di modal konfirmasi delete
    function deleteData_Tampil(id) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalDel").modal();

                    $('#id').val(id);
                }
            }
        })

    }
    piutang.deleteData_Tampil = deleteData_Tampil;

    // Menampilkan data kedalam modal detail
    function detailData_Tampil(id) {
        document.getElementById("detail_id").innerHTML = id;

        var dbRef_detail_tampil = firebase.database();
        var unitByID = dbRef_detail_tampil.ref("piutang/" + id);

        unitByID.on("value", function (snapshot) {
            var childData = snapshot.val();
            document.getElementById("detail_tgl_transaksi").innerHTML = childData.tgl_transaksi;
            document.getElementById("detail_pembayaran").innerHTML = childData.pembayaran;
            document.getElementById("detail_jatuh_tempo").innerHTML = childData.jatuh_tempo;
            document.getElementById("detail_nama_pembeli").innerHTML = childData.nama_pembeli;
            document.getElementById("detail_alamat_pembeli").innerHTML = childData.alamat_pembeli;
            document.getElementById("detail_uang_muka").innerHTML = childData.uang_muka;
            document.getElementById("detail_leasing").innerHTML = childData.leasing;
            document.getElementById("detail_ct_pokok").innerHTML = childData.ct_pokok;
            document.getElementById("detail_ct_bunga").innerHTML = childData.ct_bunga;
            document.getElementById("detail_insentif_spf").innerHTML = childData.insentif_spf;
            document.getElementById("detail_sisa_piutang").innerHTML = childData.sisa_piutang;
            document.getElementById("detail_note_piutang").innerHTML = childData.note_piutang;
        });
    }
    piutang.detailData_Tampil = detailData_Tampil;

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
    piutang.seleksi4cetakPOunit = seleksi4cetakPOunit;
})()