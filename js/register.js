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
	rules: {
        username: {
            required: true
        },
        password: {
            required: true
        },
        confpassword: {
            required: true
        }
	},
    messages: {
        username: {
            required: "Silahkan isi username"
        },
        password: {
            required: "Silahkan isi password"
        },
        confpassword: {
            required: "Silahkan isi confpassword"
        }
	},
    errorPlacement: function ( error, element ) {
        element.addClass( "is-invalid" );
        error.addClass( "invalid-feedback" );
        error.insertAfter(element.parent().parent());

    }
});
