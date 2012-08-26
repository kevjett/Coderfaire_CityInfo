/**
 * Loads and displays Movie theaters for a given zip
 * and displays them by leveraging jQuery Mobile
 * 
 * Author: Sean Mumford
 */
$( document ).delegate("#movieTimes", "pageshow", function() {
    $.mobile.showPageLoadingMsg();
    getTheatersNearMe();
});

function getTheatersNearMe() {
    var $movieList = $('#movies-list');
    $movieList.empty();
    if(!zip) {
        zip = 37203;
    }
    var data = {
        proxy_url: 'http://www.fandango.com/rss/moviesnearme_' + zip + '.rss'
    };
    $.get('proxy.php', data, function(response){
        var json = $.xml2json(response);
        var items = jQuery.makeArray(json.channel.item);
        displayTheatersNearMe(items);
        $.mobile.hidePageLoadingMsg();
    })
}

function displayTheatersNearMe(theaterArray) {
    var $movieList = $('#movies-list');
    if(theaterArray.length < 1) {
        $movieList.append('<li>We\'re sorry, we couldn\'t find any movie listings for your area.</li>');
    } else {
        $.each(theaterArray, function(i, item) {
            var desc = '<div>' + item.description + '</div>';
            var address = '';
            var movies = $(desc).find('ul').html();
            if(!movies) {
                movies = '<li>We\'re sorry, we couldn\'t find any movies listed for this theater.</li>';
            }
            $movieList.append('<li>' + item.title + address + '<ul class="details" data-role="listview">'+movies+'</ul></li>');
        });
    }
    $movieList.listview('refresh');
}