// JavaScript Document
// This file handles javascript calls for the Music page of the application
// This file has to be included in the head of index.html

 function postProcessing(data) {
   var json = $.xml2json(data);
   //alert(json.event[0].event_date);
   $.each(json.event, function(index, value) { 
	   $('#music-list').append('<li>Item ' + index + '</li>');
	});
   $('#music-list').listview('refresh');
 }


function getValues(){
         $.ajax({
            url: 'proxy.php',
            type: 'GET',
            //'http://api.jambase.com/search?zip=37209&apikey=9cr62zp4rfuseug5zbn428k4&radius=15&startDate=08/26/12&endDate=08/29/12'
            data: {
				proxy_url: 'http://api.jambase.com/search?zip=37209&apikey=9cr62zp4rfuseug5zbn428k4&radius=15&startDate=08/26/12&endDate=08/29/12'
			},
            cache: false,
            success: function(data) {postProcessing(data);},
            async:true,
            });
    };	


$( document ).delegate("#music", "pageshow", function() {
 getValues();
  //alert("test");
});