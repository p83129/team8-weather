function startTime(){
    var today = new Date();
    var Y = today.getFullYear(); 
    var M = today.getMonth() + 1; 
    var D = today.getDate(); 
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById('clockA').innerHTML = Y + '.' + M + '.' + D + '&nbsp;'+' | '+ hh + ":" + mm + ":" + ss;    
    var timeoutId = setTimeout(startTime, 500);
  }
  
  function checkTime(i){
    if(i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var NewArea2 = NewArea;
  function Tw_area(area, time){   
      
    //使用者點擊最新的區域名稱
    if(NewArea2 != area && area != ""){
        NewArea2 = area;
        //alert(NewArea2)
    }
    //顯示區域圖    
    var TWA = document.getElementById('TWA');
    TWA.setAttribute('src', 'image/' + NewArea2 + '.png');

    var TWNameA = document.getElementById('TWNameA');
    TWNameA.innerHTML = NewArea2;    

    //針對時間抓相對應的資訊(育玲)
    
};