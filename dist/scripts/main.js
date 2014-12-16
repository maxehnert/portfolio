$(function() {
  $('.circle-graph').easyPieChart({
    scaleColor: false,
    lineWidth: 22,
    lineCap: 'butt',
    barColor: 'HSLA(200, 69%, 54%, 1)',
    trackColor: 'white' ,
    size: 175,
    animate: 800
  });
});

//Navbar change color
// $('.navbar').waypoint(function() {
//   $('.navbar').addClass('newColor')
// }, {
//   offset: function() {
//     return -$(this).height();
//   }
// });
