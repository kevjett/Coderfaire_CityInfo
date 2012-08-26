// JavaScript Document
// This file handles javascript calls for the Weather page of the application
// This file has to be included in the head of index.html

$( document ).delegate("#movieTimes", "pageshow", function() {
    var zip = '37027';
    var $movieList = $('#movies-list');
    var data = {
        proxy_url: 'http://www.fandango.com/rss/moviesnearme_' + zip + '.rss'
    };
    $.get('proxy.php', data, function(response){
        var json = $.xml2json(response);
        console.log(json);
        displayMoviesNearMe(json.channel.item);
    })
  
    function displayMoviesNearMe(json) {
        $.each(json, function(index, item) { 
            $movieList.append('<li>' + item.title + '</li>');
        });
        $movieList.listview('refresh');
    } 
});
