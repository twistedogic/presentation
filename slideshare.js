var url = 'http://www.slideshare.net/HubSpot/10-unconventional-proven-databacked-cro-hacks';
var xpath = '//*[contains(concat( " ", @class, " " ), concat( " ", "slide_image", " " ))]';
var YQL = require('yql');
var _ = require('lodash');
var query = new YQL("select * from html where url=\"" + url + "\" and xpath=" + "'" + xpath + "'");
query.exec(function(error, response) {
    if (!error) {
        var slide = [];
        var data = response.query.results.img;
        var title = data[0].alt;
        for (var i = 0; i < data.length; i++) {
            slide.push(data[i]['data-full']);
        }
        var json = {
            title: title,
            content: slide
        };
        console.log(json);
    }
});