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