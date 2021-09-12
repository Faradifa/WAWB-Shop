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
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        }
	},
    messages: {
        username: {
            required: "Please enter your email",
            email: "Please using valid email"
        },
        password: {
            required: "Please enter your password",
            minlength: "Password minimum 8 characters"
        }
	},
    errorPlacement: function ( error, element ) {
        element.addClass( "is-invalid" );
        error.addClass( "invalid-feedback" );
        error.insertAfter(element.parent().parent());

    }
});