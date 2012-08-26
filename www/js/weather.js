// JavaScript Document
// This file handles javascript calls for the Weather page of the application
// This file has to be included in the head of index.html

$( document ).delegate("#weather", "pageshow", function() {
  
  // Do stuff for this page here.
  
  $.ajax({
  	type: 'get',
	url: 'proxy.php',
	data: {
		proxy_url: 'http://i.wxbug.net/REST/Direct/GetObs.ashx?zip=37027&ic=1&api_key=ngh3w72jsxp43xp4wkpy33ym'
	},
	
	success: function( data ){
		$('#wx_conditions').html( data.desc );
	},
	dataType: 'json'

  });
  
});