// script.js
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.querySelector(".more-text");

    readMoreBtn.addEventListener("click", function() {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});


document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! Sign up now to start your fitness journey.');
});


// Add click event to the CTA button
document.querySelector('.cta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up! We will contact you shortly.');
    // You can redirect to a signup page or handle the form submission as needed
    window.location.href = 'signup.html';
});
