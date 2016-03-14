var markers = [
    {
        name :"home",
        lat : 40.498916,
        long: -74.435435,
        address: '31 Lincoln Ave, Highland Park, NJ 08904'
    },
    {
        name :"bar",
        lat : 40.499951,
        long: -74.426142,
        address: '13 N 4th Ave, Highland Park, NJ 08904'
    },
    {
        name :"bank",
        lat : 40.499379,
        long: -74.427858,
        address: '301 Raritan Ave, Highland Park, NJ 08904'
    },
    {
        name :"food",
        lat : 40.497935,
        long: -74.432818,
        address: '80 Raritan Ave, Highland Park, NJ 08904'
    } 
];


//creating maps 
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(40.498916, -74.435435),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
//creating  markers
function AddMarker( lat, long, name){

var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,long),
        title: name,
        map: map,
        draggable: false
    });
marker.addListener('click', function() {
     var googleStreetView = "https://maps.googleapis.com/maps/api/streetview?size=300x300&location="+lat+","+long+"";
      var JQueryMap = $('.test-div').append('<img src="' + googleStreetView + '">');
    $(document).ready(function(){      
       JQueryMap.show();
       $('#map').on('mouseleave', function() {
          $('.test-div').empty(); 
        });
    });

});
}
//add address to the list 
var addAddress = function(address){
  $('#placeaddress').append("<p>"+markers[address].name+"</p>");
}
var viewModel = function(){
  var self = this;
  //generating top list  
  self.placeList = ko.observableArray([]);

    markers.forEach(function(placeItem){
        self.placeList.push(placeItem);
    });
    this.currentPlace = ko.observable( this.placeList()[0]);
  

    /* Search function. */
      self.query = '';
  self.search = function() {
    // empty function for future functionality, keep present to avoid page reload
     var userInput = self.query;
     var InputLowerCase = userInput.toLowerCase();
     var home = 'home';
     var bank = 'bank';
     var food = 'food';
     var bar = 'bar';
     if(InputLowerCase == home){
          AddMarker(markers[0].lat, markers[0].long, markers[0].name);
            
    }else if(InputLowerCase == bank){
        AddMarker(markers[1].lat, markers[1].long, markers[1].name);
     }else if(InputLowerCase == bar){
        AddMarker(markers[2].lat, markers[2].long, markers[2].name)
     }else if(InputLowerCase == food){
        AddMarker(markers[3].lat, markers[3].long, markers[3].name)
     }else{
        alert("you haven't entered any locations from the list.")
         }
  };

  
     
};
ko.applyBindings(viewModel());

