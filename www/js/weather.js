// JavaScript Document
// This file handles javascript calls for the Weather page of the application
// This file has to be included in the head of index.html

$( document ).delegate("#weather", "pageshow", function() {
  
  // Do stuff for this page here.
  
  $.ajax({
  	type: 'get',
	url: 'proxy.php',
	data: {
		proxy_url: 'http://i.wxbug.net/REST/Direct/GetForecastHourly.ashx',
		zip: '37027',
		ht: 't',
		ht: 'i',
		ht: 'd',
		api_key: 'umwv5ngjpwxd8pqspmuq6cmr'
	},
	success: function( data ){
		alert( 'I got a response' );
	}

  });
  
});