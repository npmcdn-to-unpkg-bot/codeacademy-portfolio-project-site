function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var CityValue = $("#city").val();
    var StreetValue = $("#street").val();
    var address = StreetValue + ', ' + CityValue;
      var googleStreetView = "https://maps.googleapis.com/maps/api/streetview?size=500x500&location="+address+"";
      
       $body.append('<img class="bgimg" src="' + googleStreetView + '">');
    
    // YOUR CODE GOES HERE!

    var NYTIMESURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+CityValue+"=newest&api-key=e91ed08c92a72570c50f86518afc81a4:4:64302808";
   $.getJSON(NYTIMESURL, function(response){
        //var data = response..length;
        var NYTimesData = response.response.docs;        
        for(i=0; i<NYTimesData.length;i++){
            $("#nytimes-articles").append("<li>"
                +"<a href='"+NYTimesData[i].web_url+"'>"+
                "<h2>"+NYTimesData[i].headline.main+"</h2>");
        }
    }).error(function(){
        console.log("This ain't right buddy");
    });

    var WikiUrl = "http://en.wikipedia.orgllll/w/api.php?action=opensearch&search="+CityValue+"&format=json";
    $.ajax({
        url: WikiUrl,
        type:'GET',
        dataType:"jsonp",
        success: function(response){
        var WikiArticles = response;
      
            $('#wikipedia-links').append("<li>"+
                 "<a href='"+response[3]+"'>"+   
                 "<p>"+response[0]+"</p>"+
                 "</a>"+
                "</li>");
        
        
        }                      
    });

       return false;

}
$('#form-container').submit(loadData);
