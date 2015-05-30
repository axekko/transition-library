// $(function(){


//   var clickEvent = function(e) {
//     var $child = toggleHide(this);
//     var coords = {
//       x : e.offsetX,
//       y : e.offsetY
//     };
//     placeCircle($child, coords);
//     if(!$child.hasClass('hide')){
//       enlargeCircle($child, coords.x, coords.y);
//     }
//   };

//   var $elements = $('.element');
//   $elements.on('click', clickEvent);

//   function toggleHide(context) {
//     var circle = $(context).find('.round');
//     var $circle = $(circle);
//     hidden = $circle.hasClass('hide');
//     if(hidden){
//       $circle.removeClass('hide');
//     }else{
//       circle.addClass('hide');
//     }
//     return $circle;
//   }

//   function placeCircle(elem, coordinate){
//     elem.css('left', coordinate.x + 'px').css('top', coordinate.y + 'px');
//   }

//   function enlargeCircle(elem, x, y) {
//     var size = 10;
//     var interval = setInterval(function(){
//       var incriment = 18;
//       size += incriment;
//       elem.css('height', size + 'px')
//         .css('width', size + 'px');
//       if(size >= (x * 0.5)){
//         x = x - (incriment / 2); 
//         elem.css('left', x);
//       }
//       if(size >= (y * 0.5)){
//         y = y - (incriment /2);
//         elem.css('top', y);
//       }
//     }, 2);
//     setTimeout(function(){
//       clearInterval(interval);
//     }, 1000);
//   }
// });

var elements = document.getElementsByClassName('element');

var clickFunc = function(e) {
  console.log(e);
};

for(var i = 0, len = elements.length; i < len; i++){
  elements[i].addEventListener('click', clickFunc);
}

var circle = document.createElement('div');
circle.style.height = '10px';
circle.style.width = '10px';
circle.style.borderRadius = '50%';

  