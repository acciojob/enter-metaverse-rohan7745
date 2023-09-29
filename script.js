//your JS code here. If required.
// Get references to the HTML elements
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

// Add a click event listener to the button
enterButton.addEventListener('click', function() {
    // Update the content of the 'status' paragraph
    statusParagraph.textContent = "Entered Metaverse";
});

