//  data mutasi
var data = [{
        "referensi": "TRF/1",
        "kategori": "Transfer Bank",
        "norek": "1234 5678 9123 456",
        "pemilik_rek": "MEY MEIZIA",
        "keterangan": "TRF Dari MEY MEIZIA Ke SYIFA KHAIRINA",
        "nominal": "20.000,00",
        "kurs": "Rupiah",
        "tipe": "Debit",
        "tgl": "30/04/2023",
        "jam": "21:11:32",
        "zona_waktu": "WIB"
    },
    {
        "referensi": "TRF/2",
        "kategori": "Transfer Bank",
        "norek": "9876 5432 1987 654",
        "pemilik_rek": "FERDY FAUZAN",
        "keterangan": "TRF Dari FERDY FAUZAN Ke MEY MEIZIA",
        "nominal": "25.000,00",
        "kurs": "Rupiah",
        "tipe": "Kredit",
        "tgl": "21/04/2023",
        "jam": "19:01:58",
        "zona_waktu": "WIB"
    },
    {
        "referensi": "TRF/3",
        "kategori": "Bayar Tagihan",
        "norek": "1234 5678 9123 456",
        "pemilik_rek": "MEY MEIZIA",
        "keterangan": "Bayar SHOPEE",
        "nominal": "321.800,00",
        "kurs": "Rupiah",
        "tipe": "Debit",
        "tgl": "21/04/2023",
        "jam": "19:01:58",
        "zona_waktu": "WIB"
    },
    {
        "referensi": "TRF/4",
        "kategori": "Tarik Tunai",
        "norek": "1357 2468 1589 951",
        "pemilik_rek": "SYIFA KHAIRINA",
        "keterangan": "Tarik Tunai BSI - Mandiri",
        "nominal": "1.000.000,00",
        "kurs": "Rupiah",
        "tipe": "Debit",
        "tgl": "15/04/2023",
        "jam": "06:23:22",
        "zona_waktu": "WIB"
    },
    {
        "referensi": "TRF/5",
        "kategori": "Top Up",
        "norek": "1234 5678 9123 456",
        "pemilik_rek": "MEY MEIZIA",
        "keterangan": "Isi Saldo Gopay",
        "nominal": "45.000,00",
        "kurs": "Rupiah",
        "tipe": "Debit",
        "tgl": "02/04/2023",
        "jam": "06:23:22",
        "zona_waktu": "WIB"
    },
    {
        "referensi": "TRF/6",
        "kategori": "Bayar Tagihan",
        "norek": "1234 5678 9123 456",
        "pemilik_rek": "MEY MEIZIA",
        "keterangan": "Bayar TOKOPEDIA",
        "nominal": "88.000,00",
        "kurs": "Rupiah",
        "tipe": "Debit",
        "tgl": "02/02/2023",
        "jam": "00:41:54",
        "zona_waktu": "WIB"
    }
  ];

const modalBody = document.querySelector(".modal-body");
const modalTitle = document.querySelector(".modal-title");

// Mendapatkan elemen dengan ID "mutasi"
const mutasiElem = document.getElementById("mutasi");

showMutasi(data);

// Membuat konten HTML untuk setiap item dalam array
function showMutasi(data){
    data.forEach(function(item) {
        // Membuat elemen button
        const btnElem = document.createElement("button");
        btnElem.type = "button";
        btnElem.classList.add("btn","mutasi-item","text-start","btn-block","w-100");
        btnElem.setAttribute("data-bs-toggle", "modal");
            
        // Membuat elemen div dengan kelas "row"
        const rowElem = document.createElement("div");
        rowElem.classList.add("row");
    
        // Membuat elemen div dengan kelas "col-8"
        const col8Elem = document.createElement("div");
        col8Elem.classList.add("col-7");
    
        // Membuat elemen div dengan kelas "h5" dan kelas "kategori-mutasi"
        const kategoriElem = document.createElement("div");
        kategoriElem.classList.add("h5", "kategori-mutasi");
        kategoriElem.textContent = item.kategori;
    
        // Membuat elemen div dengan kelas "keterangan"
        const keteranganElem = document.createElement("div");
        keteranganElem.classList.add("keterangan");
        keteranganElem.textContent = "keterangan: " + item.keterangan;
    
        // Membuat elemen div dengan kelas "waktu-trf"
        const waktuElem = document.createElement("div");
        waktuElem.classList.add("waktu-trf");
        waktuElem.textContent = item.tgl + "  |  " + item.jam + " " + item.zona_waktu;
    
        // Menambahkan elemen kategori, keterangan, dan waktu ke dalam elemen col-8
        col8Elem.appendChild(kategoriElem);
        col8Elem.appendChild(keteranganElem);
        col8Elem.appendChild(waktuElem);
    
        // Membuat elemen div dengan kelas "col"
        const colElem = document.createElement("div");
        colElem.classList.add("col");
    
        // Membuat elemen div dengan kelas "h6" dan kelas "nominal-debit" atau "nominal-kredit" tergantung tipe transaksi
        const nominalElem = document.createElement("div");
        nominalElem.classList.add("h6","text-end");
        if(item.tipe === "Debit"){
            nominalElem.classList.add("nominal-debit");
            nominalElem.textContent = "- Rp"+item.nominal;
        }else{
            nominalElem.classList.add("nominal-kredit");
            nominalElem.textContent = "+ Rp"+item.nominal;
        }
    
        const divider = document.createElement("hr");
        divider.classList.add("mt-2","mb-2");
    
        //  menyatukan seluruhnya ke mutasiElem
        colElem.appendChild(nominalElem);
        rowElem.appendChild(col8Elem);
        rowElem.appendChild(colElem);
        mutasiElem.appendChild(divider);
        btnElem.appendChild(rowElem);
        mutasiElem.appendChild(btnElem);
    });
}