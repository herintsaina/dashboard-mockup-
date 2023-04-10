// $(".toggle-password").click(function() {
//
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });
//
// alert('Bonjour');

/************************************************************/

// function function_password() {
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
//
//     const form = document.querySelector("form");
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//     });
//
// }

let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password")

eyeicon.onclick = function (){
    if (password.type == "password"){
        password.type = "text";
        eyeicon.src = "./assets/images/eye-open.png";
    }else {
        password.type = "password";
        eyeicon.src = "./assets/images/eye-close.png";
    }
}