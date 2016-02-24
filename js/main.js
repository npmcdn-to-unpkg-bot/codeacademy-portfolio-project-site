var shine = new Shine(document.getElementById('my-shine-object'));
window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);

$(document).ready(function(){
$('#sky').jQlouds({
  minClouds: 3, // minimum amount of clouds
  maxClouds: 5, // maximum amount of clouds
});
$('#sky').jQlouds({
  wind: true
});

});
