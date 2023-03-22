const login = () => {

    let value1 = document.getElementById("username").value
    let value2 = document.getElementById("email").value
    let value3 = document.getElementById("password").value
    if (value1 && value2 == "admin@user.com" && value3 == "123456") {
      alert("Submitted")
        window.location.href = "login.html";
        
    } else {
        Toastify({
            text: "Enter Correct Information",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #760303, #c5bf00)",

            },
        }).showToast();
        return
    }
}
    