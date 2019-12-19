$(function() {
  //bg color selector
  $('.color').click(function() {
    var color = $(this).attr('data-value');
    $('.colormap').css('background-color', color);
  });

  //add color picker if supported
  if (Modernizr.inputtypes.color) {
    $('.picker').css('display', 'inline-block');
    var c = document.getElementById('colorpicker');
    c.addEventListener(
      'change',
      function(e) {
        //d.innerHTML = c.value;
        var color = c.value;
        $('.colormap').css('background-color', color);
      },
      false
    );
  }
});
function pickColor() {
  $('#colorpicker').click();
}
//# sourceURL=pen.js
