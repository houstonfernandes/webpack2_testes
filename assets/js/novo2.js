$ = require('jquery');
//import $ from 'jquery';

$(document).ready(function(){
	bt =  $('<button>').addClass('btn').text('novo2 criado script ').addClass('btn-danger');
	$('h1').append(bt);

	$('#txt').val('valor alterado por javascript - usando import ES6');
});
