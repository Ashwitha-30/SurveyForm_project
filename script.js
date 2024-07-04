document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    if (name && email && age && rating) {
        alert(`Thank you for your feedback, ${name}!`);
        // Here you could send the data to a server
        // For example, using fetch API or XMLHttpRequest

        // Reset the form
        document.getElementById('surveyForm').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});
