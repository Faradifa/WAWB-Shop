$("#form-tambah-data").validate({
    errorElement: "div",
	rules: {
        "nama-barang": {
            required: true    
        },
        harga: {
            required: true,
            number: true
        },
        banyak: {
            required: true,
            number: true
        }
	},
    messages: {
        "nama-barang": {
            required: "Mohon isi nama barang"    
        },
        harga: {
            required: "Mohon isi harga",
            number: "Masukkan angka saja"
        },
        banyak: {
            required: "Mohon isi banyak barang",
            number: "Masukkan angka saja"
        }
	},
    errorPlacement: function ( error, element ) {
        element.addClass( "is-invalid" );
        error.addClass( "invalid-feedback" );
        error.insertAfter(element);

    },
    highlight: function ( element, errorClass, validClass ) {
        $(element).addClass( "is-invalid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass( "is-invalid" );
    }
});
