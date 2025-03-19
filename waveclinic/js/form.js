function toggleTextBox(questionId, textBoxId) {
    const yesOption = document.getElementById(questionId + '-yes');
    const noOption = document.getElementById(questionId + '-no');
    const textBox = document.getElementById(textBoxId);

    if (yesOption.checked) {
        textBox.style.display = 'block';  
    } else {
        textBox.style.display = 'none';   
    }
}
