const colorPicker = document.getElementById('colorpicker');

$(function() {
  // Background Color Selector
  $('.color').click(function() {
    var color = $(this).attr('data-value');
    $('.colormap').css('background-color', color);
  });

  // Color Picker
  if (Modernizr.inputtypes.color) {
    $('.picker').css('display', 'inline-block');
    colorPicker.addEventListener(
      'change',
      function(event) {
        var color = colorPicker.value;
        $('.colormap').css('background-color', color);
      },
      false
    );
  }
});

pickColor = () => {
  $('#colorpicker').click();
};
//# sourceURL=pen.js
