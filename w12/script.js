function nighDayHandler(self){
    var target = document.querySelector('body');      
    if(self.value == 'day'){
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      document.querySelector('#night_day_2').value = 'night';
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
      alist[i].style.color = 'blue';
      i = i + 1;
    } 
  } else {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      document.querySelector('#night_day_2').value = 'day';
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
      alist[i].style.color = 'powderblue';
      i = i + 1;
    } 
    
  }
}



/*function add(left, right){
    document.write(left+ '+' +right+ '=');
    return left + right;   
}
function sub(left, right){
    document.write(left+ '-' +right+ '=');
    return left - right;   
}
function mul(left, right){
    document.write(left+ '*' +right+ '=');
    return left * right;   
}
function div(left, right){
    document.write(left+ '/' +right+ '=');
    return left / right;   
}*/