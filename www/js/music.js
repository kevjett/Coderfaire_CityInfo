// JavaScript Document
// This file handles javascript calls for the Music page of the application
// This file has to be included in the head of index.html

 function postProcessing(data) {
   var json = $.xml2json(data);
   var event_date = '';
   $.each(json.event, function(index, value) { 
   		if (event_date!=value.event_date) {
   			$('#music-list').append('<li data-role="list-divider">' + value.event_date + '</li>');
   			event_date = value.event_date;
   		}
   		var artists = jQuery.makeArray(value.artists);
   		var artist = jQuery.makeArray(artists[0].artist);
   		$('#music-list').append('<li><a href="' + value.event_url + '">' + artist[0].artist_name + ' @ ' + value.venue.venue_name + '</a></li>');
	});
   $('#music-list').listview('refresh');
   $.mobile.hidePageLoadingMsg();
 }


function getData(){
		$.mobile.showPageLoadingMsg();

         $.ajax({
            url: 'proxy.php',
            type: 'GET',
            //'http://api.jambase.com/search?zip=37209&apikey=9cr62zp4rfuseug5zbn428k4&radius=15&startDate=08/26/12&endDate=08/29/12'
            data: {
				proxy_url: 'http://api.jambase.com/search?zip=' + zip + '&apikey=9cr62zp4rfuseug5zbn428k4&radius=15&startDate=' + today + '&endDate=' + later
			},
            cache: false,
            success: function(data) {postProcessing(data);},
            async:true,
            });
    };	


$( document ).delegate("#music", "pageshow", function() {
 getData();
});