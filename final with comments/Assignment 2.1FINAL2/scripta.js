//Here are the functions for the buttons for BUENAVENTURA_MORAGA_PS2a.html. The cancel button was
//already directed in the HTML file
function add(){
	value1= parseInt(document.mainForm.num1.value);
	value2= parseInt(document.mainForm.num2.value);
	
	sum = value1 + value2;
	document.mainForm.Answer.value = sum;
		
}

function minus(){
	value1= parseInt(document.mainForm.num1.value);
	value2= parseInt(document.mainForm.num2.value);
	
	sub = value1 - value2;
	document.mainForm.Answer.value = sub;
		
}
function multiply(){
	value1= parseInt(document.mainForm.num1.value);
	value2= parseInt(document.mainForm.num2.value);
	
	mul = value1 * value2;
	document.mainForm.Answer.value = mul;
	
	
}
function divide(){
	value1= parseInt(document.mainForm.num1.value);
	value2= parseInt(document.mainForm.num2.value);
	
	div = value1 / value2;
	document.mainForm.Answer.value = div;
		
}