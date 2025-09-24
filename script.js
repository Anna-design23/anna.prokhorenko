// Star rating interaction
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');


stars.forEach(star => {
star.addEventListener('click', () => {
const value = star.getAttribute('data-value');
ratingInput.value = value;
stars.forEach(s => s.classList.toggle('selected', s.getAttribute('data-value') <= value));
});
});


// Handle form submission
document.getElementById("surveyForm").addEventListener("submit", function(e) {
e.preventDefault(); // prevent real submission


// Show thank you message
document.querySelector(".thank-you").style.display = "block";


// Hide form
this.style.display = "none";
});
