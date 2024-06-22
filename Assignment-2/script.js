document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var isValid = true;

    var name = document.getElementById('name');
    var city = document.getElementById('city');
    var totalMarks = document.getElementById('totalMarks');
    var cutoff = document.getElementById('cutoff');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');

    // Reset previous validation states
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.classList.remove('is-invalid');
    });

    // Validate name
    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
    }

    // Validate city
    if (!city.value.trim()) {
        city.classList.add('is-invalid');
        isValid = false;
    }

    // Validate total marks
    if (!totalMarks.value || isNaN(totalMarks.value) || totalMarks.value <= 0) {
        totalMarks.classList.add('is-invalid');
        isValid = false;
    }

    // Validate cutoff
    if (!cutoff.value || isNaN(cutoff.value) || cutoff.value <= 0) {
        cutoff.classList.add('is-invalid');
        isValid = false;
    }

    // Validate phone number
    var phonePattern = /^[0-9]{10}$/;
    if (!phone.value.match(phonePattern)) {
        phone.classList.add('is-invalid');
        isValid = false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailPattern)) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
