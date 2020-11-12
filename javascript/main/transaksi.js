var transaksi = {};

(function () {

    var firebase = app_firebase;

    // Menampilkan data dalam bentuk tabel
    function tampilData() {

        // Buat referensi database firebase
        var dbRef = firebase.database();
        var transaksi = dbRef.ref("transaksi");

        var no_inc = 1;

        var cariData = document.getElementById("cariData").value;

        if (cariData != "") {

            // Dapatkan referensi table 
            var table = document.getElementById("tabel-transaksi").getElementsByTagName('tbody')[0];

            // Membuang semua isi table
            $("#tabel-transaksi").find("tr:gt(0)").remove();

            // Memuat Data
            transaksi.orderByChild("tgl_transaksi").equalTo(cariData).on("child_added", function (data) {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.tgl_transaksi;
                cell3.innerHTML = data.penjualan_jenis;
                cell4.innerHTML = data.nama_cust;
                cell5.innerHTML = data.leasing;
                cell6.innerHTML = data.penjualan_jenis;
                cell7.innerHTML = data.jml_unit;
                cell8.innerHTML = data.payment;
                cell9.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="transaksi.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="transaksi.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/><svg></button><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="transaksi.detailData_Tampil(' +
                    data.id +
                    ');transaksi.cetakdetail_Tampil(' +
                    data.id +
                    ');" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/></svg></button>';
            });
        } else {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.tgl_transaksi;
                cell3.innerHTML = data.penjualan_jenis;
                cell4.innerHTML = data.nama_cust;
                cell5.innerHTML = data.leasing;
                cell6.innerHTML = data.penjualan_jenis;
                cell7.innerHTML = data.jml_unit;
                cell8.innerHTML = data.payment;
                cell9.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="transaksi.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="transaksi.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/><svg></button><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="transaksi.detailData_Tampil(' +
                    data.id +
                    ');transaksi.cetakdetail_Tampil(' +
                    data.id +
                    ');" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd" d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/></svg></button>';
            });
        }
        $('#cariData').val('');
    }
    transaksi.tampilData = tampilData;

    // Mengambil id terakhir dan membahkan dengan 1 dan memasukkan kedalam text id di modal tambah
    function ambilDataTerakhir() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "sales_counter@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalAdd").modal();

                    $('#tgl_transaksi').val("");
                    $('#penjualan_jenis').val("");
                    $('#nama_cust').val("");
                    $('#alamat_cust').val("");
                    $('#leasing').val("");
                    $('#unit_type').val("");
                    $('#jml_unit').val("");
                    $('#hargaOTR').val("");
                    $('#hargaTDP').val("");
                    $('#um_murni').val("");
                    $('#payment').val("");
                    $('#sub_leasing').val("");
                    $('#SPF_transaksi').val("");
                    $('#pencairan_leasing').val("");
                    $('#no_polisi').val("");
                    $('#note_penjualan').val("");

                    var dbRef_ambilDataTerakhir = firebase.database();
                    var cariAkhir = dbRef_ambilDataTerakhir.ref("transaksi");
                    cariAkhir.limitToLast(1).on('child_added', function (dataAkhir) {
                        var snap = dataAkhir.val();
                        var id_record_terakhir = snap.id + 1;
                        document.getElementById("id").value = id_record_terakhir;
                    });
                }
            }
        })
    }
    transaksi.ambilDataTerakhir = ambilDataTerakhir;

    // Melakukan proses penambahan data
    function addData_Proses() {
        var id = $('#id').val();
        var tgl_transaksi = $('#tgl_transaksi').val();
        var penjualan_jenis = $('#penjualan_jenis').val();
        var nama_cust = $('#nama_cust').val();
        var alamat_cust = $('#alamat_cust').val();
        var leasing = $('#leasing').val();
        var unit_type = $('#unit_type').val();
        var jml_unit = $('#jml_unit').val();
        var hargaOTR = $('#hargaOTR').val();
        var hargaTDP = $('#hargaTDP').val();
        var um_murni = $('#um_murni').val();
        var payment = $('#payment').val();
        var sub_leasing = $('#sub_leasing').val();
        var SPF_transaksi = $('#SPF_transaksi').val();
        var pencairan_leasing = $('#pencairan_leasing').val();
        var no_polisi = $('#no_polisi').val();
        var note_penjualan = $('#note_penjualan').val();

        /* perhitungan piutang_um */
        var piutang_um = (+um_murni) - (+payment);

        /* perhitungan harga_leasing */
        var harga_leasing = (+hargaOTR) - (+hargaTDP) + (+sub_leasing);

        /* perhitungan piutang_leasing */
        var piutang_leasing = (+harga_leasing) - (+pencairan_leasing);

        var dbRef_add_proses = firebase.database();

        // Isikan data kedalam firebase
        var addUnit = dbRef_add_proses.ref("transaksi/" + id);

        addUnit.set({

            id: parseInt(id),
            tgl_transaksi: tgl_transaksi,
            penjualan_jenis: penjualan_jenis,
            nama_cust: nama_cust,
            alamat_cust: alamat_cust,
            leasing: leasing,
            unit_type: unit_type,
            jml_unit: jml_unit,
            hargaOTR: hargaOTR,
            hargaTDP: hargaTDP,
            um_murni: um_murni,
            payment: payment,
            sub_leasing: sub_leasing,
            piutang_um: piutang_um,
            harga_leasing: harga_leasing,
            SPF_transaksi: SPF_transaksi,
            pencairan_leasing: pencairan_leasing,
            piutang_leasing: piutang_leasing,
            no_polisi: no_polisi,
            note_penjualan: note_penjualan
        });
        $('#ModalAdd').modal('hide');
        $('#ModalCetak').modal('show');
        tampilData();
    }
    transaksi.addData_Proses = addData_Proses;

    // Menampilkan data yang akan di update kedalam modal update
    function updateData_Tampil(id) {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "sales_counter@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalUpdate").modal();

                    $('#show_id').val(id);

                    var dbRef_update_tampil = firebase.database();
                    var unitByID = dbRef_update_tampil.ref("transaksi/" + id);

                    unitByID.on("value", function (snapshot) {
                        var childData = snapshot.val();
                        $('#show_tgl_transaksi').val(childData.tgl_transaksi);
                        $('#show_penjualan_jenis').val(childData.penjualan_jenis);
                        $('#show_nama_cust').val(childData.nama_cust);
                        $('#show_alamat_cust').val(childData.alamat_cust);
                        $('#show_leasing').val(childData.leasing);
                        $('#show_unit_type').val(childData.unit_type);
                        $('#show_jml_unit').val(childData.jml_unit);
                        $('#show_hargaOTR').val(childData.hargaOTR);
                        $('#show_hargaTDP').val(childData.hargaTDP);
                        $('#show_um_murni').val(childData.um_murni);
                        $('#show_payment').val(childData.payment);
                        $('#show_sub_leasing').val(childData.sub_leasing);
                        $('#show_SPF_transaksi').val(childData.SPF_transaksi);
                        $('#show_pencairan_leasing').val(childData.pencairan_leasing);
                        $('#show_no_polisi').val(childData.no_polisi);
                        $('#show_note_penjualan').val(childData.note_penjualan);
                    });
                }
            }
        })

    }
    transaksi.updateData_Tampil = updateData_Tampil;

    // Melakukan proses update data
    function updateData_Proses() {
        var id = $('#show_id').val();
        var tgl_transaksi = $('#show_tgl_transaksi').val();
        var penjualan_jenis = $('#show_penjualan_jenis').val();
        var nama_cust = $('#show_nama_cust').val();
        var alamat_cust = $('#show_alamat_cust').val();
        var leasing = $('#show_leasing').val();
        var unit_type = $('#show_unit_type').val();
        var jml_unit = $('#show_jml_unit').val();
        var hargaOTR = $('#show_hargaOTR').val();
        var hargaTDP = $('#show_hargaTDP').val();
        var um_murni = $('#show_um_murni').val();
        var payment = $('#show_payment').val();
        var sub_leasing = $('#show_sub_leasing').val();
        var SPF_transaksi = $('#show_SPF_transaksi').val();
        var pencairan_leasing = $('#show_pencairan_leasing').val();
        var no_polisi = $('#show_no_polisi').val();
        var note_penjualan = $('#show_note_penjualan').val();

        /* perhitungan piutang_um */
        var piutang_um = (+um_murni) - (+payment);

        /* perhitungan harga_leasing */
        var harga_leasing = (+hargaOTR) - (+hargaTDP) + (+sub_leasing);

        /* perhitungan piutang_leasing */
        var piutang_leasing = (+harga_leasing) - (+pencairan_leasing);

        var dbRef_update_proses = firebase.database();
        var update_unit = dbRef_update_proses.ref("transaksi/" + id);

        update_unit.update({
            "tgl_transaksi": tgl_transaksi,
            "penjualan_jenis": penjualan_jenis,
            "nama_cust": nama_cust,
            "alamat_cust": alamat_cust,
            "leasing": leasing,
            "unit_type": unit_type,
            "jml_unit": jml_unit,
            "hargaOTR": hargaOTR,
            "hargaTDP": hargaTDP,
            "um_murni": um_murni,
            "payment": payment,
            "sub_leasing": sub_leasing,
            "piutang_um": piutang_um,
            "harga_leasing": harga_leasing,
            "SPF_transaksi": SPF_transaksi,
            "pencairan_leasing": pencairan_leasing,
            "piutang_leasing": piutang_leasing,
            "no_polisi": no_polisi,
            "note_penjualan": note_penjualan
        });

        $('#ModalUpdate').modal('hide');
        tampilData();
    }
    transaksi.updateData_Proses = updateData_Proses;

    // Melakukan proses delete data yang telah dikonfirmasi sebelumnya
    function delData_Proses() {

        var id = $('#id').val();

        var dbRef_delete = firebase.database();
        var piutang_umAlat = dbRef_delete.ref("transaksi/" + id);
        piutang_umAlat.remove();
        $('#ModalDel').modal('hide');
        tampilData();
    }
    transaksi.delData_Proses = delData_Proses;

    // Memasukkan id ke textbox di modal konfirmasi delete
    function deleteData_Tampil(id) {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "sales_counter@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalDel").modal();

                    $('#id').val(id);
                }
            }
        })


    }
    transaksi.deleteData_Tampil = deleteData_Tampil;

    // Menampilkan data kedalam modal detail
    function detailData_Tampil(id) {

        document.getElementById("detail_id").innerHTML = id;

        var dbRef_detail_tampil = firebase.database();
        var unitByID = dbRef_detail_tampil.ref("transaksi/" + id);

        unitByID.on("value", function (snapshot) {
            var childData = snapshot.val();
            document.getElementById("detail_tgl_transaksi").innerHTML = childData.tgl_transaksi;
            document.getElementById("detail_penjualan_jenis").innerHTML = childData.penjualan_jenis;
            document.getElementById("detail_nama_cust").innerHTML = childData.nama_cust;
            document.getElementById("detail_alamat_cust").innerHTML = childData.alamat_cust;
            document.getElementById("detail_leasing").innerHTML = childData.leasing;
            document.getElementById("detail_unit_type").innerHTML = childData.unit_type;
            document.getElementById("detail_jml_unit").innerHTML = childData.jml_unit;
            document.getElementById("detail_hargaOTR").innerHTML = childData.hargaOTR;
            document.getElementById("detail_hargaTDP").innerHTML = childData.hargaTDP;
            document.getElementById("detail_um_murni").innerHTML = childData.um_murni;
            document.getElementById("detail_payment").innerHTML = childData.payment;
            document.getElementById("detail_sub_leasing").innerHTML = childData.sub_leasing;
            document.getElementById("detail_piutang_um").innerHTML = childData.piutang_um;
            document.getElementById("detail_harga_leasing").innerHTML = childData.harga_leasing;
            document.getElementById("detail_SPF_transaksi").innerHTML = childData.SPF_transaksi;
            document.getElementById("detail_pencairan_leasing").innerHTML = childData.pencairan_leasing;
            document.getElementById("detail_piutang_leasing").innerHTML = childData.piutang_leasing;
            document.getElementById("detail_no_polisi").innerHTML = childData.no_polisi;
            document.getElementById("detail_note_penjualan").innerHTML = childData.note_penjualan;
        });
    }
    transaksi.detailData_Tampil = detailData_Tampil;

    // Menampilkan data tambah yang akan di cetak kedalam modal cetak
    function cetakData_Tampil() {

        /* from tambah transaksi */
        var tgl_transaksi = document.getElementById("tgl_transaksi").value;
        var nama_cust = document.getElementById("nama_cust").value;
        var alamat_cust = document.getElementById("alamat_cust").value;
        var hargaOTR = document.getElementById("hargaOTR").value;
        var um_murni = document.getElementById("um_murni").value;
        var payment = document.getElementById("payment").value;
        var unit_type = document.getElementById("unit_type").value;

        document.getElementById("cetak_tgl_transaksi").innerHTML = tgl_transaksi;
        document.getElementById("cetak_nama_cust").innerHTML = nama_cust;
        document.getElementById("cetak_alamat_cust").innerHTML = alamat_cust;
        document.getElementById("cetak_hargaOTR").innerHTML = hargaOTR;
        document.getElementById("cetak_um_murni").innerHTML = um_murni;
        document.getElementById("cetak_payment").innerHTML = payment;
        document.getElementById("cetak_unit_type").innerHTML = unit_type;
    }
    transaksi.cetakData_Tampil = cetakData_Tampil;

    // Menampilkan data detail yang akan di cetak kedalam modal cetak
    function cetakdetail_Tampil(id) {

        var dbRef_detail_tampil = firebase.database();
        var unitByID = dbRef_detail_tampil.ref("transaksi/" + id);

        unitByID.on("value", function (snapshot) {
            var childData = snapshot.val();
            document.getElementById("cetak_tgl_transaksi").innerHTML = childData.tgl_transaksi;
            document.getElementById("cetak_nama_cust").innerHTML = childData.nama_cust;
            document.getElementById("cetak_alamat_cust").innerHTML = childData.alamat_cust;
            document.getElementById("cetak_hargaOTR").innerHTML = childData.hargaOTR;
            document.getElementById("cetak_um_murni").innerHTML = childData.um_murni;
            document.getElementById("cetak_payment").innerHTML = childData.payment;
            document.getElementById("cetak_unit_type").innerHTML = childData.unit_type;
        });
    }
    transaksi.cetakdetail_Tampil = cetakdetail_Tampil;

    // Melakukan cetak data
    function cetakData(element) {
        var originalContents = document.body.innerHTML;
        var printContent = document.getElementById(element).innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContents;
    }
    transaksi.cetakData = cetakData;

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
    transaksi.seleksi4cetakPOunit = seleksi4cetakPOunit;
})()