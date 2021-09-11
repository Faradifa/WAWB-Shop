const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

$("#login-form").validate({
    errorElement: "p",
    errorPlacement: function ( error, element ) {
        element.addClass( "is-invalid" );
        // Add the `help-block` class to the error element
        error.addClass( "invalid-feedback" );

        error.insertAfter(element.parent().parent());

    }
});
$("#my_form").validate({
      rules: {
        username : {
            required: true,
            minlength:2
        },
        password : {
            required: true,
            minlength: 5
        },
        /* confirm_password : {
                required: true,
                minlength: 5,
        equalTo: "#password"
        }, */
        newsletter: "required"
      },
      messages : {
        username: {
            required: "Silahkan masukkan sebuah nama pengguna",
            minlength: "Nama pengguna harus berisi paling sedikit 2 characters"
        },
        password: {
            required: "Silahkan isi password",
            minlength: "Password anda paling sedikit berisi 5 huruf"
        },
        /*confirm_password: {
            required: "Silahkan isi password",
            minlength: "Password anda paling sedikit berisi 5 huruf",
            equalTo: "Silahkan masukkan password yang sama seperti di atas"
        },*/
            newsletter: "Silahkan checklist opsi anda"
      }
    });