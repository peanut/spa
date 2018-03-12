var width = document.getElementById("rectangle-width"); 
var height =document.getElementById('rectangle-height');
var calc = document.getElementById('rectangle-calc');
var perimeter =document.getElementById('rectangle-perimeter');
var area = document.getElementById('rectangle-area');
var aa=document.getElementById('aa');
var bb=document.getElementById('bb');
width.onblur = function(){

  if(width.value == ''){
                     aa.innerHTML = "宽度不能为空!";
                                                         
                                         
  }
  else{
            aa.innerHTML = '';
                  
  }          
               
}
height.onblur = function(){
  if(height.value ==''){
            bb.innerHTML = "高度不能为空!";
                       
                  
                 
  } 
  else{
          bb.innerHTML = '';
              
  }


} 



calc.onclick=function(){
     var x =width.value;
        var y =height.value;
              
           var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
              var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

                 var max = Math.max(lenX, lenY);
                   perimeter.value= (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
                    area.value=  (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
                               //perimeter.value=wid * 2 +hei * 2;
                               //           //  area.value = wid * hei ;
                               //
}
