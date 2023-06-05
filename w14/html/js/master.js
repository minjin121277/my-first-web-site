var Body = {
    setColor: function(color){
    //   document.querySelector('body').style.color=color; 
        $('body').css('color', color);
    },
    setBackgroundColor: function(color){
    //   document.querySelector('body').style.backgroundColor=color;
        $('body').css('background-color', color);
    }
  }
  
  var Links = {
    setColor: function(color){
        $('a').css('color', color);
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    }
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('yellow');  
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('orange');
      self.value = 'night';  
    } 
  }