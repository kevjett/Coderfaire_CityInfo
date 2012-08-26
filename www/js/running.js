// JavaScript Document
// This file handles javascript calls for the Music page of the application
// This file has to be included in the head of index.html

 function postProcessing(data) {
   var json = $.xml2json(data);
   var event_date = '';
   $('#running-events').empty();
   $.each(json.results.result, function(index, value) { 
   		if (event_date!=value.meta.startDate) {
            event_date = value.meta.startDate;
   			$('#running-events').append('<li data-role="list-divider">' + event_date.substr(5,2) + '/' + event_date.substr(8,2) + '/' + event_date.substr(0,4) + '</li>');
   		}
   		$('#running-events').append('<li><a href="' + value.url + '">' + value.meta.assetName + '</a></li>');
	});
   $('#running-events').listview('refresh');
   $.mobile.hidePageLoadingMsg();
 }


function getData(){
		$.mobile.showPageLoadingMsg();
      var r_today = "" + ("0" + (t.getMonth()+1)).slice(-2) + "/" + ("0" + t.getDate()).slice(-2) + "/" + t.getFullYear();
      var r_later = "" + ("0" + (t.getMonth()+2)).slice(-2) + "/" + ("0" + t.getDate()).slice(-2) + "/" + t.getFullYear();
         $.ajax({
            url: 'proxy.php',
            type: 'GET',
            data: {
				proxy_url: 'http://api.amp.active.com/search?k=&f=activities&v=xml&l=' + zip + '&r=15&s=date_asc&m=meta:startDate:daterange:08/26/2012..09/31/2012+meta:channel%3DRunning+meta:splitMediaType%3DEvent&api_key=wuhmn9ye94xn3xnteudxsavw'
			},
            cache: false,
            success: function(data) {postProcessing(data);},
            failure: function() { $.mobile.hidePageLoadingMsg(); },
            async:true,
            });
    };	


$( document ).delegate("#runningEvents", "pageshow", function() {
 getData();
});