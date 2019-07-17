const attr = [document.querySelector('.attr1'), document.querySelector('.attr2'),document.querySelector('.attr3')];
const weight = [document.querySelector('.weight1'),document.querySelector('.weight2'),document.querySelector('.weight3')];
const submit = document.querySelector('.submit');
const table = document.querySelector('.table');
const result = document.querySelector('.result');
let index = 1;

function weightAvg() {
	let value1 = Number(attr[0].value) * (Number(weight[0].value)/100);
	let value2 = Number(attr[1].value) * (Number(weight[1].value)/100);
	let value3 = Number(attr[2].value) * (Number(weight[2].value)/100);

	let sum = value1+value2+value3;
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



