const attr1 = document.querySelector('.attr1');
const weight1 = document.querySelector('.weight1');
const submit = document.querySelector('.submit');
const table = document.querySelector('.table');
const result = document.querySelector('.result');
let index = 1;

function weightAvg() {
	let value1 = Number(attr1.value);
	let value2 = Number(weight1.value)/100;
	let sum = (value1 * value2)/2;
	result.value = sum;
	appendTable(sum);
}

function appendTable(sum) {
	let tr = document.createElement('tr');
	let cell = document.createElement('td');
	let cell2 = document.createElement('td');
	let num = sum;

	cell.textContent = index;
	table.appendChild(tr);
	table.appendChild(cell);
	index++;
	cell2.textContent = sum;
	table.appendChild(cell2);
}

submit.addEventListener('click', weightAvg);



