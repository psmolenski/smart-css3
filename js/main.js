/* global window, document*/

jQuery(function($){
  var handle = $('.handle'),
      mainBox = $('#main-box');

  handle.position({
    at : 'left top',
    of : mainBox
  });

  handle.draggable({
    axis : 'x',
    containment : [mainBox.offset().left-handle.width()/2, 0, mainBox.offset().left+handle.width()/2+mainBox.width()/2, 0],
    start : function(event, ui) {
      if(typeof $(this).data('initial-offset') == "undefined") {
        $(this).data('initial-offset', $(this).offset());
      }
    },
    drag : function(){
      var initialOffset = $(this).data('initial-offset');
      var dragOffset = $(this).offset().left - initialOffset.left;

      mainBox.css('border-radius', dragOffset);

    }
  });
});

