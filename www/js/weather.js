// JavaScript Document
// This file handles javascript calls for the Weather page of the application
// This file has to be included in the head of index.html

$( document ).delegate("#weather", "pageshow", function() {
  
  // Do stuff for this page here.
  $.mobile.showPageLoadingMsg();
  $('#weather-days').empty();
  $.ajax({
  	type: 'get',
	url: 'proxy.php',
	data: {
		proxy_url: 'http://i.wxbug.net/REST/Direct/GetForecast.ashx?zip=' + zip + '&nf=7&ih=1&ht=t&ht=i&l=en&c=US&api_key=ngh3w72jsxp43xp4wkpy33ym'
	},
	
	success: function( data ){
		$('#wx_conditions').empty();
		$.each( data.forecastList, function(index, value) { 
			var itemText = "";
			itemText = '<li><img src="http://img.weather.weatherbug.com/forecast/icons/localized/75x63/en/trans/';
			itemText += value.dayIcon + '.png" />';
			itemText += '<h3 class="ul-li-heading">' + value.dayTitle + '</h3>';
			itemText += '<p class="ul-li-desc">' + value.dayPred + '</p>';
			itemText += '</li>';
		
		
		   $('#weather-days').append(itemText);
		});
	   $('#weather-days').listview('refresh');
	   $.mobile.hidePageLoadingMsg();
		
	},
	dataType: 'json'

  });
  
  
  
});