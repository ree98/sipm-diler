var warehouse = {};

(function () {

    var firebase = app_firebase;

    // Menampilkan data dalam bentuk tabel
    function tampilData() {

        // Buat referensi database firebase
        var dbRef = firebase.database();
        var warehouse = dbRef.ref("warehouse");

        var no_inc = 1;

        var cariData = document.getElementById("cariData").value;

        if (cariData != "") {
            // Dapatkan referensi table 
            var table = document.getElementById("tabel-warehouse").getElementsByTagName('tbody')[0];

            // Membuang semua isi table
            $("#tabel-warehouse").find("tr:gt(0)").remove();

            // Memuat Data
            warehouse.orderByChild("unit_date").equalTo(cariData).on("child_added", function (data, prevChildKey) {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.unit_date;
                cell3.innerHTML = data.unit_type;
                cell4.innerHTML = data.unit_warna;
                cell5.innerHTML = data.no_rangka;
                cell6.innerHTML = data.no_mesin;
                cell7.innerHTML = data.unit_asal;
                cell8.innerHTML = data.date_sell;
                cell9.innerHTML = data.status;
                cell10.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="warehouse.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /><path fill - rule = "evenodd" d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />< /svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="warehouse.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill - rule = "evenodd" d = "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /><svg></button ><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="warehouse.detailData_Tampil(' +
                    data.id +
                    ')" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd"  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>< /svg></button> ';
            });
        } else {
            // Dapatkan referensi table 
            var table = document.getElementById("tabel-warehouse").getElementsByTagName('tbody')[0];

            // Membuang semua isi table
            $("#tabel-warehouse").find("tr:gt(0)").remove();

            // Memuat Data
            warehouse.on("child_added", function (data, prevChildKey) {
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

                cell1.innerHTML = no_inc++;
                cell2.innerHTML = data.unit_date;
                cell3.innerHTML = data.unit_type;
                cell4.innerHTML = data.unit_warna;
                cell5.innerHTML = data.no_rangka;
                cell6.innerHTML = data.no_mesin;
                cell7.innerHTML = data.unit_asal;
                cell8.innerHTML = data.date_sell;
                cell9.innerHTML = data.status;
                cell10.innerHTML =
                    '<button class="btn btn-success btn-sm" type="button" id="update_data" onclick="warehouse.updateData_Tampil(' +
                    data.id +
                    ')"><svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /><path fill - rule = "evenodd" d = "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />< /svg></button><button class="btn btn-danger btn-sm" type="button" id="delete_data" onclick="warehouse.deleteData_Tampil(' +
                    data.id +
                    ')" style="margin-left:10px;"><svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d = "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /><path fill - rule = "evenodd" d = "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /><svg></button ><button class="btn btn-primary btn-sm" type="button" id="detail_data" onclick="warehouse.detailData_Tampil(' +
                    data.id +
                    ')" data-toggle="modal" data-target="#ModalDetail" style="margin-left:10px;"><svg class="bi bi-file-text" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path fill-rule="evenodd"  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>< /svg></button> ';
            });
        }
        $('#cariData').val('');
    }
    warehouse.tampilData = tampilData;

    // Mengambil id terakhir dan membahkan dengan 1 dan memasukkan kedalam text id di modal tambah
    function ambilDataTerakhir() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {

                    $("#ModalAdd").modal();

                    $('#unit_date').val("");
                    $('#unit_type').val("");
                    $('#unit_warna').val("");
                    $('#no_rangka').val("");
                    $('#no_mesin').val("");
                    $('#unit_asal').val("");
                    $('#date_sell').val("");
                    $('#status').val("");
                    $('#note_warehouse').val("");

                    var dbRef_ambilDataTerakhir = firebase.database();
                    var cariAkhir = dbRef_ambilDataTerakhir.ref("warehouse");
                    cariAkhir.limitToLast(1).on('child_added', function (dataAkhir) {
                        var snap = dataAkhir.val();
                        var id_record_terakhir = snap.id + 1;
                        document.getElementById("id").value = id_record_terakhir;
                    });
                }
            }
        })
    }
    warehouse.ambilDataTerakhir = ambilDataTerakhir;

    // Melakukan proses penambahan data
    function addData_Proses() {
        var id = $('#id').val();
        var unit_date = $('#unit_date').val();
        var unit_type = $('#unit_type').val();
        var unit_warna = $('#unit_warna').val();
        var no_rangka = $('#no_rangka').val();
        var no_mesin = $('#no_mesin').val();
        var unit_asal = $('#unit_asal').val();
        var date_sell = $('#date_sell').val();
        var status = $('#status').val();
        var note_warehouse = $('#note_warehouse').val();

        var dbRef_add_proses = firebase.database();

        // Isikan data kedalam firebase
        var addUnit = dbRef_add_proses.ref("warehouse/" + id);

        addUnit.set({

            id: parseInt(id),
            unit_date: unit_date,
            unit_type: unit_type,
            unit_warna: unit_warna,
            no_rangka: no_rangka,
            no_mesin: no_mesin,
            unit_asal: unit_asal,
            date_sell: date_sell,
            status: status,
            note_warehouse: note_warehouse

        });

        $('#ModalAdd').modal('hide');
        warehouse.tampilData = tampilData;
    }
    warehouse.addData_Proses = addData_Proses;

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
                    var unitByID = dbRef_update_tampil.ref("warehouse/" + id);

                    unitByID.on("value", function (snapshot) {
                        var childData = snapshot.val();
                        $('#show_unit_date').val(childData.unit_date);
                        $('#show_unit_type').val(childData.unit_type);
                        $('#show_unit_warna').val(childData.unit_warna);
                        $('#show_no_rangka').val(childData.no_rangka);
                        $('#show_no_mesin').val(childData.no_mesin);
                        $('#show_unit_asal').val(childData.unit_asal);
                        $('#show_date_sell').val(childData.date_sell);
                        $('#show_status').val(childData.status);
                        $('#show_note_warehouse').val(childData.note_warehouse);
                    });
                }
            }
        })

    }
    warehouse.updateData_Tampil = updateData_Tampil;

    // Melakukan proses update data
    function updateData_Proses() {
        var id = $('#show_id').val();
        var unit_date = $('#show_unit_date').val();
        var unit_type = $('#show_unit_type').val();
        var unit_warna = $('#show_unit_warna').val();
        var no_rangka = $('#show_no_rangka').val();
        var no_mesin = $('#show_no_mesin').val();
        var unit_asal = $('#show_unit_asal').val();
        var date_sell = $('#show_date_sell').val();
        var status = $('#show_status').val();
        var note_warehouse = $('#show_note_warehouse').val();

        var dbRef_update_proses = firebase.database();
        var update_unit = dbRef_update_proses.ref("warehouse/" + id);

        update_unit.update({
            "unit_date": unit_date,
            "unit_type": unit_type,
            "unit_warna": unit_warna,
            "no_rangka": no_rangka,
            "no_mesin": no_mesin,
            "unit_asal": unit_asal,
            "date_sell": date_sell,
            "status": status,
            "note_warehouse": note_warehouse
        });

        $('#ModalUpdate').modal('hide');
        tampilData();
    }
    warehouse.updateData_Proses = updateData_Proses;

    // Melakukan proses delete data yang telah dikonfirmasi sebelumnya
    function delData_Proses() {
        var id = $('#id').val();

        var dbRef_delete = firebase.database();
        var statusAlat = dbRef_delete.ref("warehouse/" + id);
        statusAlat.remove();
        $('#ModalDel').modal('hide');
        tampilData();
    }
    warehouse.delData_Proses = delData_Proses;

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
    warehouse.deleteData_Tampil = deleteData_Tampil;

    // Menampilkan data kedalam modal detail
    function detailData_Tampil(id) {
        document.getElementById("detail_id").innerHTML = id;

        var dbRef_detail_tampil = firebase.database();
        var unitByID = dbRef_detail_tampil.ref("warehouse/" + id);

        unitByID.on("value", function (snapshot) {
            var childData = snapshot.val();
            document.getElementById("detail_unit_date").innerHTML = childData.unit_date;
            document.getElementById("detail_unit_type").innerHTML = childData.unit_type;
            document.getElementById("detail_unit_warna").innerHTML = childData.unit_warna;
            document.getElementById("detail_no_rangka").innerHTML = childData.no_rangka;
            document.getElementById("detail_no_mesin").innerHTML = childData.no_mesin;
            document.getElementById("detail_unit_asal").innerHTML = childData.unit_asal;
            document.getElementById("detail_date_sell").innerHTML = childData.date_sell;
            document.getElementById("detail_status").innerHTML = childData.status;
            document.getElementById("detail_note_warehouse").innerHTML = childData.note_warehouse;
        });
    }
    warehouse.detailData_Tampil = detailData_Tampil;

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
    warehouse.seleksi4cetakPOunit = seleksi4cetakPOunit;
})();