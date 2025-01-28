const inputBox = document.getElementById("text-input");
const outputBox = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

function isPalindrome(str) {
	let alphanumString = str.replace(/\W|_|\s/g, "").toLowerCase();

	return alphanumString === alphanumString.split("").reverse().join("")
		? true
		: false;
}

function renderOutput() {
	if (inputBox.value === "") {
		alert("Please input a value");
	} else {
		outputBox.innerText = isPalindrome(inputBox.value)
			? `${inputBox.value} is a palindrome`
			: `${inputBox.value} is not a palindrome`;
	}
}

checkButton.addEventListener("click", renderOutput);
