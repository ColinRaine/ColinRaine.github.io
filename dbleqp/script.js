const attr = [document.querySelector('.attr1'), document.querySelector('.attr2'),document.querySelector('.attr3')];
const weight = [document.querySelector('.weight1'),document.querySelector('.weight2'),document.querySelector('.weight3')];
const submit = document.querySelector('.submit');
const table = document.querySelector('.table');
const tbody = document.querySelector('.tbody');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
let index = 1;


function check() {
	let value1 = Number(attr[0].value) * (Number(weight[0].value)/100);
	let value2 = Number(attr[1].value) * (Number(weight[1].value)/100);
	let value3 = Number(attr[2].value) * (Number(weight[2].value)/100);
	let sumWeight = Number(weight[0].value) + Number(weight[1].value) + Number(weight[2].value);

	if (value1 == 0 || value2==0 || value3==0){
		alert("Missing Attribute and/or Weight value(s).");
	}else if (sumWeight<100){
		alert("Weight less than 100%");
	}else if(sumWeight>100){
		alert("Weight greater than 100%");
	}else {
		return weightAvg(value1,value2,value3);
	}
}

function weightAvg(num1,num2,num3) {
	let sum = num1+num2+num3;
	result.value = sum;
	appendTable(sum);
}

function appendTable(sum) {
	let tr = document.createElement('tr');
	let cell = document.createElement('td');
	let cell2 = document.createElement('td');
	let num = sum;

	cell.textContent = index;
	tbody.appendChild(tr);
	tbody.appendChild(cell);
	index++;
	cell2.textContent = sum.toFixed(2);
	tbody.appendChild(cell2);

	return;
}

function resetTable() {
	while(tbody.childElementCount > 1 ){
		tbody.removeChild(tbody.lastChild);
	}
	index = 1;
}


submit.addEventListener('click', check);
reset.addEventListener('click', resetTable);
