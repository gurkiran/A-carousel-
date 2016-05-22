(function(){
  var box = document.querySelector('.carousel');
  var prev = box.querySelector('.prev');
  var next = box.querySelector('.next');
  var lists = box.querySelectorAll('.pane')
  var amount = lists.length;
  var current = lists[0];
  var counter = 0;
  function slide(value){

    current.classList.remove('current');
    counter = counter+value;
    if(value === -1 && counter<0){
      counter = amount -1;
    }
    if(value === 1 && !lists[counter]){
      counter = 0;
    }
    current = lists[counter];
    current.classList.add('current');
  }
  prev.addEventListener('click', function(){
    slide(-1);
  })

  next.addEventListener('click', function(){
    slide(1);
  })
  slide(0);

}());
