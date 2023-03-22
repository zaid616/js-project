
var cities = ["Faisalabad", "Lahore", "Karachi","Islamabad", "Kashmir"];
for (let i = 0; i < cities.length; i++) {
    document.getElementById("div3").innerHTML += i+1 + ")" + " " + cities[i] + " "}

function bt1() {
    let city = document.getElementById("value1").value;
    if (city.length < 3) {
        alert("Enter Your City Name");
        return;
    }
    let cityFirstLetters = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase()

    let capitalLetters = cityFirstLetters + cityAllLetters

    let cityFound = false;
    for (let i = 0; i <cities.length; i++)  {
        if (cities[i] === capitalLetters) {
            cityFound = true;
            let html = '<span style="color: #e63946;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is already in the List"
            document.getElementById("div4").innerHTML = html;
        }
    }
    if (cityFound === false) {
        document.getElementById("div3").innerHTML = ""
        let html = '<span style="color: #00b4d8;">' + "'" + capitalLetters + "'" + '</span>' + " " + "is successfully added into the List" 
        document.getElementById("div4").innerHTML = html;
        cities.push(capitalLetters)
        for (let i = 0; i < cities.length; i++) {
            document.getElementById("div3").innerHTML += i+1 + ")" + " " + cities[i] + " "
        }
       
    }
}


function clearA() {
    document.getElementById("value1").value = ""
    
}
function clearB() {
    let clearoutput = document.getElementById("div4").innerText
    if(!clearoutput){
        Toastify({
            text: "This field is alraedy empty.",
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
    else{
        document.getElementById("div4").innerText = ""
        Toastify({
            text: "Output is clear now.",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            // close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #0b0062)",

            },
            // onClick: function(){} // Callback after click
        }).showToast();
        return
        
    }
}