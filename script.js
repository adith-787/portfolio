// Selecting elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggling the menu on icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times'); // Optional: Change the icon to a close icon
});

// Close the menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-times');
    }
});

// Adding active class to navigation links on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
};

$("#submit-form").submit((e) => {
    e.preventDefault();
    const formData = $("#submit-form").serialize();
    

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwGQvb_VT2es86WpsRTPTPQaByqndrSKCwpcc4SQuO8-Y3aSmN_ZMR64A9aG_ePPPFrsg/exec",
        data: formData,
        method: "post",
        success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
        },
        error: function (err) {
            alert("Something went wrong");
        }
    });
});


function validateForm() {
    let isValid = true;
    let errorMessage = "";

    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    console.log("The datas", message, email, message)

    // Name validation
    if (name === "") {
        isValid = false;
        errorMessage += "Name is required.\n";
    }

    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        isValid = false;
        errorMessage += "Email is required.\n";
    } else if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Enter a valid email address.\n";
    }

    // Message validation
    if (message === "") {
        isValid = false;
        errorMessage += "Message is required.\n";
    }

    // Show error message if not valid
    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}