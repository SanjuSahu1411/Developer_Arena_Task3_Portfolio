console.log("JS Connected");
let header = document.querySelector("header");
let aboutText = document.querySelector("#about p");

aboutText.innerText = "I am currently pursuing MCA and learning Web Development \n and I enjoy creating websites and learning new technologies."
header.style.backgroundColor = "#023e8a";

let btn = document.querySelector("#clickBtn");
btn.addEventListener("click", () => {
    alert("Button Clicked");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("msgError").innerText = "";

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be 3+ characters";
        isValid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email";
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById("msgError").innerText = "Message too short";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted ✅");
        form.reset();
    }
});

let modebtn = document.querySelector("#Mode");
let crntmode = "Light";
modebtn.addEventListener("click", () => {
    if (crntmode === "Light") {
        crntmode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        crntmode = "Light";
        document.querySelector("body").style.backgroundColor = "White";
    }
    console.log(crntmode);
});

let imgs = ["HTML.png", "CSS.png", "JS.jpg"];
let i = 0;

function changeImage() {
    i = (i + 1) % imgs.length;
    document.getElementById("gallery").src = imgs[i];
};

