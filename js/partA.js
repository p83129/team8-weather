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
    // alert(NewArea2)

    //更新使用者點擊當前景點位置
    for(let i =0;i<22;i++){
      if(NewArea2 != document.getElementById("location"+i).innerText){
        let notcurrentLocation = document.getElementById("location"+i);
        notcurrentLocation.style.background = "linear-gradient(rgb(46, 141, 133),rgba(37, 43, 117, 0.685))";
      }
    }
  }
  // 更新使用者點擊時間(為點擊預設為0)
  for(let i=0;i<3;i++){
    if(time == document.querySelector(".start"+i)){
      document.getElementById("time"+i).style.background = "darkblue";
    }else if(time == ""){
      document.getElementById("time0").style.background = "darkblue";
    }
    if(time != document.querySelector(".start"+i)){
      document.getElementById("time"+i).style.background = "linear-gradient(rgb(46, 141, 133),rgba(37, 43, 117, 0.685))";
    }
  }


  //顯示區域圖    
  var TWA = document.getElementById('TWA');
  TWA.setAttribute('src', 'image/' + NewArea2 + '.png');
  var TWNameA = document.getElementById('TWNameA');
  TWNameA.innerHTML = NewArea2; 
  //針對時間抓相對應的資訊(育玲)  
  let T0;
  let T1;
  let T2;
  let locationName;
  let weatherElement;
  let wxIcon;
  let wx;
  let min;
  let max;
  let CI ;
  let PoP;
  fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A7ABC55A-F46A-4AF2-96FD-45F5451A579B")
  .then((res)=>res.json()).then((data)=>{
    let locationData = data.records.location;
    for(let i=0;i<locationData.length;i++){
      locationName = locationData[i].locationName; //API的縣市名
      weatherElement = locationData[i].weatherElement;
      T0 = weatherElement[0]["time"][0]["startTime"];
      T1 = weatherElement[0]["time"][1]["startTime"];
      T2 = weatherElement[0]["time"][2]["startTime"];
      wxIcon = document.querySelector(".wxIcon");
      wx = document.querySelector(".wx");
      min = document.querySelector(".min");
      max = document.querySelector(".max");
      CI = document.querySelector(".CI");
      PoP = document.querySelector(".PoP");

      if (locationName == NewArea2){ //根據對應的縣市名顯示資料，預設時段為T0(12~18)
        wx.textContent = weatherElement[0].time[0].parameter.parameterName;
        wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
        min.textContent = weatherElement[2].time[0].parameter.parameterName + "°c ~";
        max.textContent = weatherElement[4].time[0].parameter.parameterName + "°c ";
        CI.textContent = weatherElement[3].time[0].parameter.parameterName;
        PoP.textContent = weatherElement[1].time[0].parameter.parameterName+ " %";
        if(time == T1 ){ //根據點選的時段顯示資料
          wx.textContent = weatherElement[0].time[1].parameter.parameterName;
          wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
          min.textContent = weatherElement[2].time[1].parameter.parameterName + "°c ~";
          max.textContent = weatherElement[4].time[1].parameter.parameterName + "°c ";
          CI.textContent = weatherElement[3].time[1].parameter.parameterName;
          PoP.textContent = weatherElement[1].time[1].parameter.parameterName+ " %";
        }else if (time == T2 ){ //根據點選的時段顯示資料
          wx.textContent = weatherElement[0].time[2].parameter.parameterName;
          wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
          min.textContent = weatherElement[2].time[2].parameter.parameterName + "°c ~";
          max.textContent = weatherElement[4].time[2].parameter.parameterName + "°c ";
          CI.textContent = weatherElement[3].time[2].parameter.parameterName;
          PoP.textContent = weatherElement[1].time[2].parameter.parameterName+ " %";
        }
      }
      // if (locationName == NewArea2 && time == T0 ){ //根據對應的縣市名顯示資料
      //   wx.textContent = weatherElement[0].time[0].parameter.parameterName;
      //   wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
      //   min.textContent = weatherElement[2].time[0].parameter.parameterName + "°c ~";
      //   max.textContent = weatherElement[4].time[0].parameter.parameterName + "°c ";
      //   CI.textContent = weatherElement[3].time[0].parameter.parameterName;
      //   PoP.textContent = weatherElement[1].time[0].parameter.parameterName+ " %";
      // }else if(locationName == NewArea2 && time == T1 ){ //根據對應的縣市名顯示資料
      //   wx.textContent = weatherElement[0].time[1].parameter.parameterName;
      //   wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
      //   min.textContent = weatherElement[2].time[1].parameter.parameterName + "°c ~";
      //   max.textContent = weatherElement[4].time[1].parameter.parameterName + "°c ";
      //   CI.textContent = weatherElement[3].time[1].parameter.parameterName;
      //   PoP.textContent = weatherElement[1].time[1].parameter.parameterName+ " %";
      // }else if (locationName == NewArea2 && time == T2 ){ //根據對應的縣市名顯示資料
      //   wx.textContent = weatherElement[0].time[2].parameter.parameterName;
      //   wxIcon.setAttribute("src","image/icon/"+wx.textContent+".png");
      //   min.textContent = weatherElement[2].time[2].parameter.parameterName + "°c ~";
      //   max.textContent = weatherElement[4].time[2].parameter.parameterName + "°c ";
      //   CI.textContent = weatherElement[3].time[2].parameter.parameterName;
      //   PoP.textContent = weatherElement[1].time[2].parameter.parameterName+ " %";
      // }
    }
})
};