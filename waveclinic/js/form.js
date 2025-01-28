// Function to show/hide the text boxes based on Yes/No radio button selection
function toggleTextBox(questionId, textBoxId) {
    const yesOption = document.getElementById(questionId + '-yes');
    const noOption = document.getElementById(questionId + '-no');
    const textBox = document.getElementById(textBoxId);

    // Show the text box if the "Yes" radio button is selected, hide it if "No" is selected
    if (yesOption.checked) {
        textBox.style.display = 'block';  // Show the textbox
    } else {
        textBox.style.display = 'none';   // Hide the textbox
    }
}
