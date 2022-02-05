let num1 = 9
let num2 = 3
document.getElementById('num1-el').textConent = num1
document.getElementById('num2-el').textConent = num2

let sumEl = document.getElementById('sumEl')

function add () {
	let result = num1 + num2
	sumEl.textConent = "Sum: " + result
}
