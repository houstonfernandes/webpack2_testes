import novo3_es6 from './novo3_es6';
novo3_es6();

$(document).ready(function(){
	let bt = $('<button>')
		.addClass('btn')
		.text('novo3 usando jquery de novo3_es6 LET em vez de VAR')
		.addClass('btn-danger');

	$('h1').append(bt);
	$('#txt').val('novo3 usando jquery de novo3_es6 ');

	console.log('<- de novo a função importada, dentro de doc.ready->')
	novo3_es6();
});