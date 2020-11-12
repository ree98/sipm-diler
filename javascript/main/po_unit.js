var po_unit = {};

(function () {
    function tampilPO() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user != null) {

                if (user.email !== "manager@admin.com") {

                    $("#ModalError").modal();

                } else {


                    var tanggal = document.getElementById("tanggal").value;
                    var nama_cust = document.getElementById("nama_cust").value;
                    var dealer = document.getElementById("dealer").value;
                    var alamat_dealer = document.getElementById("alamat_dealer").value;

                    /* Unit 1 */
                    var unit_type1 = document.getElementById("unit_type1").value;
                    var warna1 = document.getElementById("warna1").value;
                    var tahun1 = document.getElementById("tahun1").value;
                    var jml_unit1 = document.getElementById("jml_unit1").value;
                    var harga1 = document.getElementById("harga1").value;
                    var total1 = (+jml_unit1) * (+harga1);

                    /* Unit 2 */
                    var unit_type2 = document.getElementById("unit_type2").value;
                    var warna2 = document.getElementById("warna2").value;
                    var tahun2 = document.getElementById("tahun2").value;
                    var jml_unit2 = document.getElementById("jml_unit2").value;
                    var harga2 = document.getElementById("harga2").value;
                    var total2 = (+jml_unit2) * (+harga2);

                    /* Unit 3 */
                    var unit_type3 = document.getElementById("unit_type3").value;
                    var warna3 = document.getElementById("warna3").value;
                    var tahun3 = document.getElementById("tahun3").value;
                    var jml_unit3 = document.getElementById("jml_unit3").value;
                    var harga3 = document.getElementById("harga3").value;
                    var total3 = (+jml_unit3) * (+harga3);

                    /* total jml dan harga */
                    var total_jumlah = (+jml_unit1) + (+jml_unit2) + (+jml_unit3);
                    var total_harga = (+total1) + (+total2) + (+total3);

                    /* show input unit to modal */
                    document.getElementById("cetak_tanggal").innerHTML = tanggal;
                    document.getElementById("cetak_nama_cust").innerHTML = nama_cust;
                    document.getElementById("cetak_dealer").innerHTML = dealer;
                    document.getElementById("cetak_alamat_dealer").innerHTML = alamat_dealer;

                    /* unit 1 */
                    document.getElementById("cetak_unit_type1").innerHTML = unit_type1;
                    document.getElementById("cetak_warna1").innerHTML = warna1;
                    document.getElementById("cetak_tahun1").innerHTML = tahun1;
                    document.getElementById("cetak_jml_unit1").innerHTML = jml_unit1;
                    document.getElementById("cetak_harga1").innerHTML = harga1;
                    document.getElementById("cetak_total1").innerHTML = total1;

                    /* unit 2 */
                    document.getElementById("cetak_unit_type2").innerHTML = unit_type2;
                    document.getElementById("cetak_warna2").innerHTML = warna2;
                    document.getElementById("cetak_tahun2").innerHTML = tahun2;
                    document.getElementById("cetak_jml_unit2").innerHTML = jml_unit2;
                    document.getElementById("cetak_harga2").innerHTML = harga2;
                    document.getElementById("cetak_total2").innerHTML = total2;

                    /* unit 3 */
                    document.getElementById("cetak_unit_type3").innerHTML = unit_type3;
                    document.getElementById("cetak_warna3").innerHTML = warna3;
                    document.getElementById("cetak_tahun3").innerHTML = tahun3;
                    document.getElementById("cetak_jml_unit3").innerHTML = jml_unit3;
                    document.getElementById("cetak_harga3").innerHTML = harga3;
                    document.getElementById("cetak_total3").innerHTML = total3;

                    /* total jml dan harga */
                    document.getElementById("cetak_total_jumlah").innerHTML = total_jumlah;
                    document.getElementById("cetak_total_harga").innerHTML = total_harga;
                }
            }
        })

    }
    po_unit.tampilPO = tampilPO;

    // Melakukan cetak data
    function cetakPO(element) {
        var originalContents = document.body.innerHTML;
        var printContent = document.getElementById(element).innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContents;
    }
    po_unit.cetakPO = cetakPO;
})()