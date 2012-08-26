// JavaScript Document
// This file handles javascript calls for the Weather page of the application
// This file has to be included in the head of index.html

$( document ).delegate("#movieTimes", "pageshow", function() {
    var $movieList = $('#movies-list');
    $movieList.empty();
    $.mobile.showPageLoadingMsg();
    if(!zip) {
        zip = 37203;
    }
    var data = {
        proxy_url: 'http://www.fandango.com/rss/moviesnearme_' + zip + '.rss'
    };
    $.get('proxy.php', data, function(response){
        var json = $.xml2json(response);
        displayTheatersNearMe(json.channel.item);
    })
  
    function displayTheatersNearMe(json) {
        $.each(json, function(i, item) {
            var desc = '<div>' + item.description + '</div>';
            var address = '';
            var movies = $(desc).find('ul').html();
            
            $movieList.append('<li>' + item.title + address + '<ul class="details" data-role="listview">'+movies+'</ul></li>');
        });
        $movieList.listview('refresh');
        $.mobile.hidePageLoadingMsg();
    } 
});
